'use strict';

define(['directives/directives'], function (directives) {
    directives.directive('loadicon', ['$rootScope', function($rootScope) {
        return {
            restrict: 'AE', //ng-class="{\'icon-edit\': !isUpdating}
            template: '<i class="icon-white {{iconClass}}"><img src="/app/images/theme/spinner.gif"  style="display: {{displayImage}}" /></i>',
            scope: {
                isUpdating: '=',
                icon:'='
            },
            link: function (scope, elem, attrs) {
                scope.iconClass = '';
                scope.displayImage = '';
                
                scope.$watch('isUpdating', function(newValue) {
                    scope.iconClass = newValue ? '' : scope.icon;
                    scope.displayImage = newValue ? 'inline' : 'none';
                });
            }
        };
    }]);
});