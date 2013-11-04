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

                        UserService.prepareUsers(data);

                        $scope.users = data;
                    },
                    UserService.prepareUsers,
                    10);
                
            };

            
            $scope.users = [];
            $scope.isEmpty = true;
            $scope.$watch('users.length', function () {
                $scope.isEmpty = !$scope.users || $scope.users.length == 0;
            });
            $scope.$on('refresh', $scope.refresh);
            
            $scope.refresh();
        }]);      
  });

