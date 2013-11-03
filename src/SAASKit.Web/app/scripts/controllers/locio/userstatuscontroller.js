'use strict';

define(['controllers/controllers', 'services/userservice'],
  function (controllers) {

      controllers.controller('UserStatusController', ['$scope', 'UserService', '$routeParams', '$rootScope', 'LocalEntityCacheService',
          
        function ($scope, UserService, $routeParams, $rootScope, LocalEntityCacheService) {
            $scope.isEmpty = true;
            $scope.user = { checkInLocation: 'Loading...' };
            
            $scope.refresh = function () {
                $rootScope.isUpdating = true;
                
                
                LocalEntityCacheService.get('user', $routeParams.userId, UserService.getUser,
                    // update data
                    function(data, isCached) {
                        $rootScope.isUpdating = isCached;
                        
                        $scope.user = UserService.prepareUser(data);
                        
                        $rootScope.title = $scope.user.fullName;
                        $scope.isEmpty = false;
                    },
                    10);
            };

            $scope.$on('refresh', $scope.refresh);

            $scope.refresh();
        }]);      
  });

