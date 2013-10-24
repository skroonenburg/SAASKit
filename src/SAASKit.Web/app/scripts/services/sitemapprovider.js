'use strict';

define(['services/services', 'sitemap'],
  function (services, sitemap) {
      services.factory('SiteMapProvider', [function () {
          var currentNode = null;
          var currentNodeChangeCallbacks = [];

          function isFunction(functionToCheck) {
              var getType = {};
              return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
          }
          
          function forEachNode(node, func, parent) {
              if (isFunction(node) && !func) {
                  // the function has been called without a node specified
                  return forEachNode(sitemap.items, node, null);
              }
              
              if (node instanceof Array) {
                  node = { items: node, isRoot: true };
              } else {
                  func(node, parent);
              }

              if (node && node.items) {
                  for (var i = 0; i < node.items.length; i++) {
                      forEachNode(node.items[i], func, node);
                  }
              }
          }

          return {
              onCurrentNodeChange: function(callback) {
                  currentNodeChangeCallbacks.push(callback);
              },
              updateCurrentRoute: function (link) {
                 forEachNode(sitemap.items, function (node) {
                     node.active = (link === node.link);
                     if (node.active) {
                         currentNode = node;
                     }
                 });
                  
                 for (var i = 0; i < currentNodeChangeCallbacks.length; i++) {
                     currentNodeChangeCallbacks[i](currentNode);
                 }
              },
              forEachNode: forEachNode,
              getParent: function (node) {
                  var foundParent = null;
                  
                  forEachNode(sitemap.items, function (nextNode, parent) {
                      if (node.link === nextNode.link && !parent.isRoot) {
                          foundParent = parent;
                      }
                  });

                  return foundParent;
              },
              getDefault: function () {
                  var defaultNode = null;
                  
                  forEachNode(sitemap.items, function (nextNode) {
                      if (nextNode.isDefault) {
                          defaultNode = nextNode;
                      }
                  });

                  return defaultNode;
              }
          };
      }]);
  });

