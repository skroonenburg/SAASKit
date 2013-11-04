'use strict';

define(['services/services'],
  function (services) {
      services.factory('CacheService', [function () {
          var cache = {};
          
          return {
              get: function(getDataFunc, returnDataFunc, expirationSeconds) {
                  var key = getDataFunc.toString();
                  
                  if (cache[key]) {
                      // first return data from cache
                      returnDataFunc(cache[key], true, true);
                  }
                  
                  // now re-get the data
                  return getDataFunc().then(function (response) {
                      // remember the data in the cache
                      cache[key] = response.data;
                      returnDataFunc(response.data, false, false);
                  });
              }
          };
      }]);
  });

