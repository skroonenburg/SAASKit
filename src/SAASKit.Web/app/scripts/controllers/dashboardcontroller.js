function DashboardController($scope, AuthenticationService) {
    AuthenticationService.ensureAuthenticated();
    $scope.user = AuthenticationService.getUserDetails();

    function updateFullName() {
        $scope.user.fullName = $scope.user.firstName + " " + $scope.user.lastName;
    }

    $scope.$watch('user.firstName', updateFullName);
    $scope.$watch('user.lastName', updateFullName);
}