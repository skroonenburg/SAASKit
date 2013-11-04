'use strict';

define(['controllers/controllers', 'sitemap'],
  function (controllers, sitemap) {
      
      controllers.controller('NavBarController', ['$scope', '$location', '$rootScope', '$routeParams', '$route', 'SiteMapProvider',
      function ($scope, $location, $rootScope, $routeParams, $route, SiteMapProvider) {
            $scope.siteMapItems = sitemap.items;

            $scope.getVisibleChildren = function (node) {
                var vis = [];
                if (node && node.items) {
                    for (var i = 0; i < node.items.length; i++) {
                        var item = node.items[i];
                        if (item.visible === true || item.visible === undefined) {
                            vis.push(item);
                        }
                    }
                }

                return vis;
            };
            
            $scope.hasVisibleChildren = function(node) {
                return $scope.getVisibleChildren(node).length > 0;
            };
            
            $scope.clickNode = function (node) {
                
                if (node.link) {
                    $location.path(node.link);
                }
                return $scope.getVisibleChildren(node).length > 0;
            };
          
            $scope.isParentOfActive = function (node) {
                var containsActiveNode = false;
                SiteMapProvider.forEachNode(node.items, function (childNode) {
                    if (childNode && childNode.active) {
                        containsActiveNode = true;
                    }
                });

                return containsActiveNode;
            };

          SiteMapProvider.onCurrentNodeChange(function(currentNode) {
              $scope.currentNode = currentNode;
          });

          $scope.isActive = function (node) {
              if (node.link === "/groups") {
                  console.log("returning " + ($scope.currentNode && (node.link === $scope.currentNode.link)));
              }
              return $scope.currentNode && (node.link === $scope.currentNode.link);
          };
      }]);
  });