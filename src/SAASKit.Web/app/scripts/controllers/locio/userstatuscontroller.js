'use strict';

define(['controllers/controllers', 'services/userservice'],
  function (controllers) {
      
      controllers.controller('UserStatusController', ['$scope', 'UserService',
          
        function ($scope, UserService) {
            
            $scope.user = {
                id: 1,
                emailAddress: "john@smith.com",
                firstName: "John",
                lastName: "Smith",
                fullName: "John Smith",
                username: "john.smith",
                avatarImg: "avatar"
            };
        }]);      
  });

