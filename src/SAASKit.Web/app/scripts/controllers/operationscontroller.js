'use strict';

define(['controllers/controllers'],
  function (controllers) {

      var operationsMap = [
          { event: 'userProfileUpdate', icon: 'icon-check', descriptionInProgress: 'Updating User Profile', descriptionComplete: 'Updated User Profile' },
          { event: 'userProfileLock', icon: 'icon-lock', descriptionInProgress: 'Locking User Profile' },
          { event: 'userProfileUnlock', icon: 'icon-unlock', descriptionInProgress: 'Unlocking User Profile' },
          { event: 'userProfileActivate', icon: 'icon-unlock', descriptionInProgress: 'Activating User Profile' },
          { event: 'userProfileDeactivate', icon: 'icon-unlock', descriptionInProgress: 'Deactivating User Profile' }
      ];
      
      controllers.controller('OperationsController', ['$scope', 
          
        function ($scope) {
            $scope.operations = [];
            $scope.showList = false;

            function completeOperation(ev, data) {

                for (var index = 0; index < $scope.operations.length; index++) {
                    if ($scope.operations[index].id === data.id) {
                        $scope.operations = $scope.operations.slice(0, index).concat($scope.operations.slice(index + 1, $scope.operations.length));
                    }
                }
            }

            function startOperation(ev, data) {
                data.time = new Date();
                    
                // find this event in the map
                var mappedOperation;

                for (var key in operationsMap) {
                    if (operationsMap[key].event === data.event) {
                        mappedOperation = operationsMap[key];
                    }
                }

                if (!mappedOperation) {
                    console.log("Invalid operation!");
                    return;
                }
                // this is a new operation
                $scope.operations.push({
                    description: mappedOperation.descriptionInProgress,
                    time: new Date(),
                    icon: mappedOperation.icon,
                    isInProgress: true,
                    id: data.id
                });

                $scope.showList = true;
            }
            
            $scope.$on('startOperation', startOperation);
            $scope.$on('completeOperation', completeOperation);
        }]);      
  });

