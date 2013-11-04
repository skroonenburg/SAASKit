'use strict';

define(['controllers/controllers', 'services/authenticationservice'],
  function (controllers) {
      controllers.controller('DashboardController', ['$scope', 'AuthenticationService',
        function ($scope, AuthenticationService) {
        }]);
  });