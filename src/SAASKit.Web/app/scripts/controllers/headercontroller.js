'use strict';

define(['controllers/controllers', 'services/authenticationservice'],
  function (controllers) {

      controllers.controller('HeaderController', ['$scope', 'AuthenticationService',

        function ($scope, AuthenticationService) {

            $scope.user = AuthenticationService.getUserDetails();

            function updateFullName() {
                $scope.user.fullName = $scope.user.firstName + " " + $scope.user.lastName;
            }

            $scope.$watch('user.firstName', updateFullName);
            $scope.$watch('user.lastName', updateFullName);

        }]);
  });