'use strict';

define(['controllers/controllers', 'services/authenticationservice'],
  function (controllers) {
      
      controllers.controller('LoginController', ['$scope', 'AuthenticationService', '$location',
        function ($scope, AuthenticationService, $location) {
            
            $scope.username = '';
            $scope.password = '';
            $scope.isError = false;

            $scope.attemptLogin = function() {

                if (AuthenticationService.attemptLogin($scope.username, $scope.password)) {
                    // login succeeded
                    $location.path('teams');
                } else {
                    // login failed
                    $scope.isError = true;
                }
            };
        }]);
  });