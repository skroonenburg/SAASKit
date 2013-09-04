// the app/scripts/main.js file, which defines our RequireJS config
require.config({
  baseUrl :'scripts',
  paths: {
    angular: 'vendor/angular',
    angularResource: 'vendor/angular-resource',
    jquery: 'vendor/jquery-1.10.2.min',
    domReady: 'vendor/domReady',
  },
  shim: {
    angular: {
        deps: ['jquery' ],
      exports: 'angular'
    },
    angularResource: {
        deps: ['angular'],
        exports: '$resource'
    }
  }
});

require([
  'angular',
  'angularResource',
  'app',
  'domReady',
  
  'controllers/dashboardcontroller',
  'controllers/logincontroller',
  'controllers/headercontroller',
  'controllers/userlistcontroller',
  'directives/butterbar',
  'ui'
],
  function (angular, angres, app, domReady) {
      'use strict';
      
    app.config(['$routeProvider',
      function($routeProvider) {
          $routeProvider
                    .when('/dashboard',
                            {
                                controller: 'DashboardController',
                                templateUrl: '/app/views/dashboard.html'
                            })
                    .when('/users',
                            {
                                controller: 'UserListController',
                                templateUrl: '/app/views/userlist.html'
                            })
                     .when('/login',
                            {
                                controller: 'LoginController',
                                templateUrl: '/app/views/login.html'
                            })
                    .otherwise({ controller: 'LoginController', templateUrl: '/app/views/login.html' });
      }
    ]);
      
    app.run(["AuthenticationService",
       function (authenticationService) {
           //authenticationService.ensureAuthenticated();
       }]);
      
    domReady(function() {
      angular.bootstrap(document, ['saaskit']);

      // The following is required if you want AngularJS Scenario tests to work
      $('html').addClass('ng-app: saaskit');
    });
  }
);