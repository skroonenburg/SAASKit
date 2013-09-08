'use strict';

define(['services/services', 'scripts/services/urlservice.js'],
  function (services) {
      services.factory('UserService', [ '$resource', '$http', 'UrlService', function ($resource, $http, UrlService) {
          return {
              getUserResource: function () {
                  return $resource(UrlService.baseUrl + '/api/users/:id', { id: '@id' }, { save: { method: 'PUT' }});
              },
              save: function(id, data) {
                  return $http.post(UrlService.baseUrl + '/api/users/updateprofile/' + id, data);
              },
              deactivate: function(id) {
                  return $http.post(UrlService.baseUrl + '/api/users/deactivate/' + id, {});
              },
              activate: function(id) {
                  return $http.post(UrlService.baseUrl + '/api/users/activate/' + id, {});
              },
              unlock: function(id) {
                  return $http.post(UrlService.baseUrl + '/api/users/unlock/' + id, {});
              },
              lock: function(id) {
                  return $http.post(UrlService.baseUrl + '/api/users/lock/' + id, {});
              }
          };
      }]);
  });

