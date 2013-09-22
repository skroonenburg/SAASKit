'use strict';

define(['controllers/controllers', 'services/authenticationservice'],
  function (controllers) {

      controllers.controller('HeaderController', ['$scope', 'AuthenticationService', '$rootScope',

        function ($scope, AuthenticationService, $rootScope) {

            $scope.user = AuthenticationService.getUserDetails();

            function updateFullName() {
                $scope.user.fullName = $scope.user.firstName + " " + $scope.user.lastName;
            }

            $scope.showSmallNavBar = function() {
                $rootScope.smallNavExpanded = !$rootScope.smallNavExpanded;
            };

            $scope.$watch('user.firstName', updateFullName);
            $scope.$watch('user.lastName', updateFullName);

        }]);
  });