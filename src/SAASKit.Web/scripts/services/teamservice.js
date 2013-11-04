'use strict';

define(['services/services', 'scripts/services/urlservice.js', 'scripts/services/cacheservice.js'],
  function (services) {
      services.factory('TeamService', [ '$resource', '$http', 'UrlService', 'CacheService', function ($resource, $http, UrlService, CacheService) {
          return {
              getTeamResource: function () {
                  return $resource(UrlService.baseUrl + '/api/teams/:id', { id: '@id' }, { save: { method: 'PUT' }});
              },
              getTeams: function() {
                  return $http.get(UrlService.baseUrl + '/api/teams');
              },
              getTeam: function(id) {
                  return $http.get(UrlService.baseUrl + '/api/teams/' + id);
              },
              save: function(id, data) {
                  return $http.post(UrlService.baseUrl + '/api/teams/updateprofile/' + id, data);
              },
              deactivate: function(id) {
                  return $http.post(UrlService.baseUrl + '/api/teams/deactivate/' + id, {});
              },
              activate: function(id) {
                  return $http.post(UrlService.baseUrl + '/api/teams/activate/' + id, {});
              },
              unlock: function(id) {
                  return $http.post(UrlService.baseUrl + '/api/teams/unlock/' + id, {});
              },
              lock: function(id) {
                  return $http.post(UrlService.baseUrl + '/api/teams/lock/' + id, {});
              }
          };
      }]);
  });

