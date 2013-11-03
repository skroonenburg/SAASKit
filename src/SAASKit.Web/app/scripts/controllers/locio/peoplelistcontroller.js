'use strict';

define(['controllers/controllers', 'services/LocalEntityCacheService', 'services/userservice'],
  function (controllers) {
      
      controllers.controller('PeopleListController', ['$scope', 'UserService', 'LocalEntityCacheService', '$location', '$rootScope', '$routeParams',
          
        function ($scope, UserService, LocalEntityCacheService, $location, $rootScope, $routeParams) {

            var locations = ["Meeting Room #1", "Boardroom", "Meeting Room #2", "Meeting Room #6", "Cafe", "Out of Office"];

            var isTeam = $routeParams.teamId ? true : false;
            
            $scope.refresh = function () {
                
                $rootScope.isUpdating = true;

                var dataAccessFunc = isTeam ? function () { return UserService.getUsersInTeam($routeParams.teamId); } : UserService.getUsers;
                
                LocalEntityCacheService.getList('user', dataAccessFunc,
                        // update data
                        function(data, isCached) {
                            $rootScope.isUpdating = isCached;

                            $scope.users = UserService.prepareUsers(data);
                        },
                        10,
                        isTeam ? 'team/' + $routeParams.teamId + '/users' : 'all');
            };
            
            $scope.$on('refresh', $scope.refresh);
            
            $scope.navigateToUser = function(user) {
                $location.path("/status/" + user.id);
            };
            
            $scope.isEmpty = true;
            $scope.$watch('users.length', function () {
                $scope.isEmpty = !$scope.users || $scope.users.length == 0;
            });
            
            $scope.title = isTeam ? $routeParams.teamName : 'People';
            $rootScope.title = $scope.title;
            $scope.refresh();
        }]);      
  });

