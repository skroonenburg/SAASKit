'use strict';

define(['controllers/controllers', 'services/userservice'],
  function (controllers) {
      
      controllers.controller('UserListController', ['$scope', 'UserService',
          
        function ($scope, UserService) {
            $scope.users = UserService.getUsers().query();            
        }]);
  });