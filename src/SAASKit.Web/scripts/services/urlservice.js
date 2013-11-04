'use strict';

define(['services/services'],
  function (services) {
      services.factory('UrlService', ['$location', function ($location) {
          
          return {
              baseUrl: 'http://api.' + ($location.host() ? $location.host() : 'saaskit.appfail.net')
          };
      }]);
  });