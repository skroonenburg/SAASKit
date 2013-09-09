'use strict';

define(['controllers/controllers', 'sitemap'],
  function (controllers, sitemap) {
      
      controllers.controller('NavBarController', ['$scope', '$location',
        function ($scope, $location) {
            alert(sitemap.items);
        }]);
  });