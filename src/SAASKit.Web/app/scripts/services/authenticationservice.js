
saasModule.factory('AuthenticationService', function ($location) {
    var authentication = {
        isLoggedIn: false
    };

    authentication.getUserDetails = function() {
        return {
            firstName: "Sam",
            lastName: "Kroonenburg"
        };
    };

    authentication.ensureAuthenticated = function() {
        if (!authentication.isLoggedIn) {
            $location.path('login');
        }
    };
    
    authentication.attemptLogin = function (username, password) {
        if (username == 'sam' && password == 'password') {
            authentication.isLoggedIn = true;
        }
        
        return authentication.isLoggedIn;
    };

    return authentication;
});