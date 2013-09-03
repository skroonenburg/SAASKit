saasModule.config(function ($routeProvider) {
    $routeProvider.when('/dashboard', { controller: DashboardController, templateUrl: '/app/views/dashboard.html' })
                  .otherwise({ controller: LoginController, templateUrl: '/app/views/login.html' });
});