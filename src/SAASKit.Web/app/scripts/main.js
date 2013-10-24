// the app/scripts/main.js file, which defines our RequireJS config
require.config({
  baseUrl :'scripts',
  paths: {
    angular: 'vendor/angular.min',
    angularResource: 'vendor/angular-resource.min',
    angularTouch: 'vendor/angular-touch.min',
    angularRoute: 'vendor/angular-route.min',
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
    },
    angularTouch: {
        deps: ['angular']
    },
    angularRoute: {
        deps: ['angular']
    }
  }
});

require([
  'angular',
  'angularTouch',
  'angularResource',
  'angularRoute',
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
  'ui',
  'services/sitemapprovider'
],
  function (angular, angres, angtouch, angroute, app, domReady, sitemap) {
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
                          title: item.title,
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
      
    app.run(function ($rootScope, SiteMapProvider) {
        $rootScope.refresh = function () {
            $rootScope.$broadcast('refresh', {});
        };
        
        $rootScope.$on('$routeChangeSuccess', function (ev, data) {
            $rootScope.smallNavExpanded = false;
            
            if (data.$$route && data.$$route.title) {
                $rootScope.title = data.$$route.title;
                $rootScope.showNavBar = data.$$route.showNavBar;
                $rootScope.showHeader = data.$$route.showHeader;
                SiteMapProvider.updateCurrentRoute(data.$$route.link);
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