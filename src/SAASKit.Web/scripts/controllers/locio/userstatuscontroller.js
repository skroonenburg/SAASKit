'use strict';

define(['controllers/controllers', 'services/userservice'],
  function (controllers) {

      controllers.controller('UserStatusController', ['$scope', 'UserService', '$routeParams', '$rootScope', 'LocalEntityCacheService',
          
        function ($scope, UserService, $routeParams, $rootScope, LocalEntityCacheService) {
            $scope.isEmpty = true;
            $scope.user = { checkInLocation: 'Loading...' };
            
            $scope.isYou = $routeParams.userId ? false : true;
            $scope.userId = !$scope.isYou ? $routeParams.userId : 1;
            
            $scope.refresh = function () {
                $rootScope.isUpdating = true;
                
                
                LocalEntityCacheService.get('user', $scope.userId, UserService.getUser,
                    // update data
                    function(data, isCached) {
                        $rootScope.isUpdating = isCached;
                        
                        $scope.user = data;
                        $scope.isOut = $scope.user.checkInLocation.indexOf('Out of Office') >= 0;
                        $rootScope.title = $scope.user.fullName;
                        $scope.isEmpty = false;
                    },
                    UserService.prepareUser,
                    10);
            };

            $scope.$on('refresh', $scope.refresh);

            $scope.refresh();
        }]);      
  });

