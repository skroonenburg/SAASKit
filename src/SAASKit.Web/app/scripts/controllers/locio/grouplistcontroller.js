'use strict';

define(['controllers/controllers', 'services/LocalEntityCacheService'],
  function (controllers) {
      
      controllers.controller('GroupListController', ['$scope', 'UserService', 'LocalEntityCacheService', '$location', '$rootScope',
          
        function ($scope, UserService, LocalEntityCacheService, $location, $rootScope) {

            var locations = ["Meeting Room #1", "Boardroom", "Meeting Room #2", "Meeting Room #6", "Cafe", "Out of Office"];
            
            $scope.refresh = function () {
                
                $rootScope.isUpdating = true;
                
                LocalEntityCacheService.getList('user', UserService.getUsers,
                    // update data
                    function(data, isCached) {
                        $rootScope.isUpdating = isCached;

                        for (var key in data) {
                            data[key].fullName = data[key].firstName + " " + data[key].lastName;
                            data[key].checkInTime = "1:32PM";
                            data[key].checkInLocation = locations[key % locations.length];
                        }

                        $scope.users = data;
                    },
                    10);
            };
            
            $scope.navigateToUser = function(user) {
                $location.path("/status/" + user.id);
            };
            
            $scope.isEmpty = true;
            $scope.$watch('users.length', function () {
                $scope.isEmpty = !$scope.users || $scope.users.length == 0;
            });
            
            $scope.refresh();
        }]);      
  });

