'use strict';

define(['controllers/controllers', 'services/userservice'],
  function (controllers) {
      
      controllers.controller('UserListController', ['$scope', 'UserService',
          
        function ($scope, UserService) {
            
            $scope.refresh = function () {
                
                $scope.isUpdating = true;
                
                if ($scope.users) {
                    $scope.users.length = 0; 
                }
                
                UserService.getUserResource().query(function(data) {
                    $scope.isUpdating = false;
                    
                    for (var key in data) {
                        data[key].fullName = data[key].firstName + " " + data[key].lastName;
                    }
                    
                    $scope.users = data;
                });
                
            };

            $scope.refresh();
        }]);      
  });

