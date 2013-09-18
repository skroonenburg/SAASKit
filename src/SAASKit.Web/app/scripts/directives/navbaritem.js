'use strict';

define(['directives/directives'], function (directives) {
    directives.directive('navbaritem', ['$rootScope', function($rootScope) {
        return {
            restrict: 'AE', //ng-class="{\'icon-edit\': !isUpdating}
            template: 
                '<li>' +
                    '<a class="dropmenu" href="{node.link}"><i class="icon-folder-close-alt"></i><span class="hidden-sm"> {{node.title}}</span> <span class="label">{{items.length}}</span></a>' +
                    '<ul ng-show="node.items.length">' +
                        '<navbaritem ng-repeat="item in node.items" node="item" ></navbaritem>' +
                        //'<li><a class="submenu" href="#/users"><i class="icon-align-justify"></i><span class="hidden-sm"> Users</span></a></li>' + 
                    '</ul>' +
                '</li>',
            scope: {
                node: '='
            },
            link: function (scope, elem, attrs) {
                scope.iconClass = '';
                scope.displayImage = '';
                
                /*scope.$watch('isUpdating', function(newValue) {
                    scope.iconClass = newValue ? '' : scope.icon;
                    scope.displayImage = newValue ? 'inline' : 'none';
                });*/
            }
        };
    }]);
});