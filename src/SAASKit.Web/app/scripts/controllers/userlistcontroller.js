'use strict';

define(['controllers/controllers', 'services/userservice'],
  function (controllers) {
      
      controllers.controller('UserListController', ['$scope', '$rootScope', 'UserService', 'LocalEntityCacheService',
          
        function ($scope, $rootScope, UserService, LocalEntityCacheService) {
            
            $scope.refresh = function () {
                
                $rootScope.isUpdating = true;
                
                LocalEntityCacheService.getList('user', UserService.getUsers,
                    // update data
                    function (data, isCached) {
                        $rootScope.isUpdating = isCached;

                        for (var key in data) {
                            data[key].fullName = data[key].firstName + " " + data[key].lastName;
                        }

                        $scope.users = data;
                    },
                    10);
                
            };

            $scope.users = [];
            $scope.isEmpty = true;
            $scope.$watch('users.length', function () {
                $scope.isEmpty = !$scope.users || $scope.users.length == 0;
            });
            
            $scope.refresh();
        }]);      
  });

