(function () {
    angular
        .module('gnap-example-app')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$location', '$state', 'sessionService', 'Token'];

    function LoginController($location, $state, sessionService, Token) {
        var vm = this;

        vm.credentials = {
            username: '',
            password: '',
            remember: true
        };
        vm.login = login;

        function login() {
            var newToken = new Token({ username: vm.credentials.username, password: vm.credentials.password });
            newToken.$save().then(
                function (token) { // success
                    // store token
                    sessionService.beginSession(token.Token);

                    // redirect back to the referrer or to the app root
                    if ($location.search().redirect_state) {
                        $state.go($location.search().redirect_state);
                    } else {
                        $location.path('/');
                    }
                },
                function (error) { // error
                    if (error.status === 400) {
                        vm.invalidCredentials = true;
                    }
                });
        };
    };
    
})();