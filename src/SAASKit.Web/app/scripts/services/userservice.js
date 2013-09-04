'use strict';

define(['services/services'],
  function (services) {
      services.factory('UserService', [ '$resource', function ($resource) {
          return {
              getUsers: function () {
               //   return [{id: 1, fullName: 'Sam Kroonenburg', emailAddress: 'sam@sam.com'}]
                  return $resource('http://api.saaskit.local/api/users/:id', { id: '@id' });
               }
          };
      }]);
  });

