'use strict';

// The app/scripts/app.js file, which defines our AngularJS app
define(['angular', 'controllers/controllers', 'services/services', 'directives/directives'], function (angular) {
      return angular.module('saaskit', ['ngTouch', 'controllers', 'services', 'directives']);
  });