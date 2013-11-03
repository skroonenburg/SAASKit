'use strict';

define(['services/services'],
  function (services) {
      services.factory('LocalEntityCacheService', [function () {
          var entityCache = {};
          var queryCache = {};
          
          function createReturnList(entityName, querykey) {
              // construct return array
              var returnArray = [];
              
              for (var i = 0; i < queryCache[querykey].length; i++) {
                  returnArray[i] = entityCache[entityName][queryCache[querykey][i]];
              }

              return returnArray;
          }

          function updateEntityCache(entityName, entityId, data) {
              if (!entityCache[entityName]) {
                  entityCache[entityName] = {};
              }

              entityCache[entityName][entityId] = data;
          }

          function updateQueryCache(entityName, querykey, data) {
              var updatedList = [];
              
              if (data) {
                  for (var i = 0; i < data.length; i++) {
                      var entityId = data[i].id;
                      // push this id into the cached query results
                      updatedList.push(entityId);
                      
                      // update this entity in the entity cache
                      updateEntityCache(entityName, entityId, data[i]);
                  }
              }

              queryCache[querykey] = updatedList;
          }
                   
          return {
              // get a list from the entity cache
              getList: function(entityName, getDataFunc, returnDataFunc, postProcessingFunc, expirationSeconds, uniqueQueryIdentifier) {
                  var key = uniqueQueryIdentifier ? uniqueQueryIdentifier : getDataFunc.toString();
                  
                  // Do we already have an entry for this query?
                  if (queryCache[key]) {
                      // first return data from cache
                      returnDataFunc(createReturnList(entityName, key), true, true);
                  }
                  
                  // now re-get the data
                  return getDataFunc().then(function (response) {
                      // post process the results before cache
                      var data = postProcessingFunc ? postProcessingFunc(response.data) : response.data;
                      
                      // remember the query result ids and the entity objects in the cache
                      updateQueryCache(entityName, key, data);
                      
                      // return the updated data
                      returnDataFunc(data, false, false);
                  });
              },
              get: function (entityName, entityId, getDataFunc, returnDataFunc, postProcessingFunc, expirationSeconds) {
                  // Do we already have an entry for this entity?
                  if (entityCache[entityName] && entityCache[entityName][entityId]) {
                      // first return data from cache
                      returnDataFunc(entityCache[entityName][entityId], true, true);
                  }
                  
                  // now re-get the data
                  return getDataFunc(entityId).then(function (response) {
                      
                      // post process the results before cache
                      var data = postProcessingFunc ? postProcessingFunc(response.data) : response.data;
                      
                      // remember the entity object in the cache
                      updateEntityCache(entityName, entityId, data);

                      // return the updated data
                      returnDataFunc(data, false, false);
                  });
              }
          };
      }]);
  });

