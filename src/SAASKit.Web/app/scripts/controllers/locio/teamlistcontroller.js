'use strict';

define(['controllers/controllers', 'services/LocalEntityCacheService', , 'services/teamservice'],
  function (controllers) {
      
      controllers.controller('TeamListController', ['$scope', 'TeamService', 'LocalEntityCacheService', '$location', '$rootScope',
          
        function ($scope, TeamService, LocalEntityCacheService, $location, $rootScope) {

            var locations = ["Meeting Room #1", "Boardroom", "Meeting Room #2", "Meeting Room #6", "Cafe", "Out of Office"];
            
            $scope.refresh = function () {
                
                $rootScope.isUpdating = true;
                
                LocalEntityCacheService.getList('team', TeamService.getTeams,
                    // update data
                    function(data, isCached) {
                        $rootScope.isUpdating = isCached;

                        /*for (var key in data) {
                            data[key].fullName = data[key].firstName + " " + data[key].lastName;
                            data[key].checkInTime = "1:32PM";
                            data[key].checkInLocation = locations[key % locations.length];
                        }*/

                        $scope.teams = data;
                    },
                    10);
            };
            
            $scope.$on('refresh', $scope.refresh);
            
            $scope.navigateToTeam = function(team) {
                $location.path("/teams/" + team.id + '/' + team.name);
            };
            
            $scope.isEmpty = true;
            $scope.$watch('teams.length', function () {
                $scope.isEmpty = !$scope.teams || $scope.teams.length == 0;
            });
            
            $scope.refresh();
        }]);      
  });

