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
  'sitemap',
  'controllers/dashboardcontroller',
  'controllers/logincontroller',
  'controllers/headercontroller',
  'controllers/userlistcontroller',
  'controllers/editusercontroller',
  'controllers/operationscontroller',
  'controllers/navbarcontroller',
  'directives/loadicon',
  // locio specific
  'controllers/locio/userstatuscontroller',
  'controllers/locio/grouplistcontroller',
  //'directives/dropmenu',
  //'directives/navbaritem',
  'ui'
],
  function (angular, angres, app, domReady, sitemap) {
      'use strict';
      
      function createRoutes($routeProvider, items) {
          for (var key in items) {
              var item = items[key];

              if (item.items) {
                  createRoutes($routeProvider, item.items);
              }
              
              if (item.controller && item.templateUrl) {
                  $routeProvider.when(item.link,
                      {
                          title: 'Dashboard',
                          showNavBar: item.showNavBar,
                          showHeader: item.showHeader,
                          controller: item.controller,
                          templateUrl: item.templateUrl,
                          link: item.link
                      });
              }
          }
      };
      
      app.config(['$routeProvider',
          function($routeProvider) {

              createRoutes($routeProvider, sitemap.items);
              
              $routeProvider.otherwise(
                  {
                      title: 'Login',
                      showNavBar: false,
                      showHeader: false,
                      controller: 'LoginController',
                      templateUrl: '/app/views/login.html'
                  });
          }
    ]);
      
    app.config(['$httpProvider', function ($httpProvider) {
        delete $httpProvider.defaults.headers.common["X-Requested-With"];
    }]);
      
    app.run(["AuthenticationService",
       function (authenticationService) {
           //authenticationService.ensureAuthenticated();
       }]);
      
    app.run(function ($rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (ev, data) {
            $rootScope.smallNavExpanded = false;
            
            if (data.$$route && data.$$route.title) {
                $rootScope.title = data.$$route.title;
                $rootScope.showNavBar = data.$$route.showNavBar;
                $rootScope.showHeader = data.$$route.showHeader;
            }
        });
    });
      
    domReady(function() {
      angular.bootstrap(document, ['saaskit']);

      // The following is required if you want AngularJS Scenario tests to work
      $('html').addClass('ng-app: saaskit');
    });
  }
);