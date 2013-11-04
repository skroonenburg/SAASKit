'use strict';

define(['services/services', 'scripts/services/urlservice.js', 'scripts/services/cacheservice.js'],
  function (services) {
      services.factory('UserService', ['$resource', '$http', 'UrlService', 'CacheService', function ($resource, $http, UrlService, CacheService) {
          function prepareUser(user) {
              user.fullName = user.firstName + " " + user.lastName;
              user.avatarImg = UrlService.baseUrl + user.avatarImg;

              return user;
          }
          
          return {
              getUserResource: function () {
                  return $resource(UrlService.baseUrl + '/api/users/:id', { id: '@id' }, { save: { method: 'PUT' }});
              },
              getUsers: function() {
                  return $http.get(UrlService.baseUrl + '/api/users');
              },
              getUser: function(id) {
                  return $http.get(UrlService.baseUrl + '/api/users/' + id);
              },
              getUsersInTeam: function (id) {
                  return $http.get(UrlService.baseUrl + '/api/teams/users/' + id);
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
              },
              prepareUser: prepareUser,
              prepareUsers: function(users) {
                  for (var key in users) {
                      prepareUser(users[key]);
                  }

                  return users;
              }
          };
      }]);
  });

