'use strict';

define(['controllers/controllers', 'sitemap'],
  function (controllers, sitemap) {
      
      controllers.controller('NavBarController', ['$scope', '$location', '$rootScope', '$routeParams', '$route',
      function ($scope, $location, $rootScope, $routeParams, $route) {
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
            
            $scope.isParentOfActive = function (node) {
                var containsActiveNode = false;
                ForEachNode(node.items, function (childNode) {
                    if (childNode && childNode.active) {
                        containsActiveNode = true;
                    }
                });

                return containsActiveNode;
            };
          
            function ForEachNode(node, func) {
                if (node instanceof Array) {
                    node = { items: node };
                } else {
                    func(node);
                }

                if (node && node.items) {
                    for (var i = 0; i < node.items.length; i++) {
                        ForEachNode(node.items[i], func);
                    }
                }
            }
            
            $rootScope.$on('$routeChangeSuccess', function (ev, data) {
                ForEachNode($scope.siteMapItems, function (node) {
                    node.active = data.$$route.link === node.link;
                });
            });
        }]);
  });