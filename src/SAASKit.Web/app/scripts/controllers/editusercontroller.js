'use strict';

define(['controllers/controllers', 'services/userservice'],
  function (controllers) {
      
      controllers.controller('EditUserController', ['$scope', 'UserService', '$routeParams', '$rootScope',
          
        function ($scope, UserService, $routeParams, $rootScope) {
            
            function updateFullName() {
                var fullName = '';
                if ($scope.user.firstName || $scope.user.lastName) {
                    fullName = $scope.user.firstName + " " + $scope.user.lastName;
                }

                $scope.user.fullName = fullName;
            }
            
            function completeOperation(operationId, func) {
                return function (data) {
                    $rootScope.$broadcast('completeOperation', { id: operationId });
                    func(data);
                };
            }
            
            function startsOperation(event, func) {
                return function () {
                    $scope.isUpdating = true;
                    var operationId = new Date();
                    $rootScope.$broadcast('startOperation', { id: operationId, entityId: '/user/' + $scope.userId, event: event });
                    func().success(completeOperation(operationId, updateComplete))
                        .error(completeOperation(operationId, updateError));
                };
            }
            
            $scope.userId = $routeParams.userId;
            $scope.isChanged = false;
            $scope.isUpdating = false;
            $scope.changeCount = 0;
            
            function loadUserToUI(updatedUser) {
                $scope.lastSavedUser = $.extend(true, {}, updatedUser);
                $scope.user = updatedUser;
                $scope.isChanged = false;
                $scope.isUpdating = false;
                
                $scope.$watch('user.firstName', updateFullName);
                $scope.$watch('user.lastName', updateFullName);
                $scope.$watch('user', updateChanged, true);
            }
            
            $scope.isUpdating = true;
            
            function updateComplete(data) {
                loadUserToUI(data ? data : $scope.user);
            }
            
            function updateError() {
                $scope.isUpdating = false;
            }
            
            $scope.user = UserService.getUserResource().get({ id: $scope.userId }, updateComplete);

            $scope.lock = startsOperation('userProfileLock', function () { return UserService.lock($scope.userId); });
            $scope.unlock = startsOperation('userProfileUnlock', function () { return UserService.unlock($scope.userId); });
            $scope.activate = startsOperation('userProfileActivate', function () { return UserService.activate($scope.userId); });
            $scope.deactivate = startsOperation('userProfileDeactivate', function () { return UserService.deactivate($scope.userId); });
            
            
            

            function updateChanged() {
                var count = 0;
                if ($scope.lastSavedUser) {
                    for (var key in $scope.lastSavedUser) {
                        if (!($scope.user && $scope.lastSavedUser && $scope.user[key] === $scope.lastSavedUser[key])) {
                            count++;
                        }
                    }
                }
                
                $scope.isChanged = count > 0;
                $scope.changeCount = count;
            }

            

            $scope.update = function () {
                $scope.isUpdating = true;
                var operationId = new Date();
                $rootScope.$broadcast('startOperation', { id: operationId, entityId: '/user/' + $scope.userId, event: 'userProfileUpdate' });
                
                UserService.getUserResource().save($scope.user, completeOperation(operationId, updateComplete), completeOperation(operationId, updateError));
            };
        }]);
  });

