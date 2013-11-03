'use strict';

define(['controllers/controllers', 'services/authenticationservice'],
  function (controllers) {

      controllers.controller('HeaderController', ['$scope', 'AuthenticationService', '$rootScope', 'SiteMapProvider', '$location', '$window',

        function ($scope, AuthenticationService, $rootScope, SiteMapProvider, $location, $window) {

            $scope.user = AuthenticationService.getUserDetails();

            function updateFullName() {
                $scope.user.fullName = $scope.user.firstName + " " + $scope.user.lastName;
            }

            $scope.showSmallNavBar = function() {
                $rootScope.smallNavExpanded = !$rootScope.smallNavExpanded;
            };

            $scope.back = function () {
                $window.history.back();
                //$location.path($scope.parentNode.link);
            };
            
            $scope.$watch('user.firstName', updateFullName);
            $scope.$watch('user.lastName', updateFullName);

            SiteMapProvider.onCurrentNodeChange(function (currentNode) {
                var parentNode = SiteMapProvider.getParent(currentNode);
                
                // find the next clickable (existant) parent
                while (parentNode && !parentNode.link) {
                    parentNode = SiteMapProvider.getParent(parentNode);
                }
                
                // if there's no parent, use the default root node
                //parentNode = parentNode ? parentNode : SiteMapProvider.getDefault();
                
                // node cannot be it's own parent
                // TODO: Replace with object equals?
                if (parentNode && (parentNode.link === currentNode.link)) {
                    parentNode = null;
                }

                $scope.parentNode = parentNode;
            });
        }]);
  });