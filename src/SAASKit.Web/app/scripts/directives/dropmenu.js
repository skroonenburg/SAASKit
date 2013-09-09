'use strict';

define(['directives/directives'], function (directives) {
    directives.directive('dropmenu', ['$rootScope', function($rootScope) {
        return {
            restrict: 'AEC', 
            link: function (scope, elem, attrs) {
                $(elem).click(function (e) {
                    
                    e.preventDefault();

                    $(this).parent().find('ul').slideToggle();
                    
                });
            }
        };
    }]);
});