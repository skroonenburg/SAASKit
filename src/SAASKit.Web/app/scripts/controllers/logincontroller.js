function LoginController($scope, AuthenticationService, $location) {
    $scope.username = '';
    $scope.password = '';
    $scope.isError = false;

    $scope.attemptLogin = function() {

        if (AuthenticationService.attemptLogin($scope.username, $scope.password)) {
            // login succeeded
            $location.path('dashboard');
        } else {
            // login failed
            $scope.isError = true;
        }
    };
}