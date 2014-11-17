'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .controller('PublicLoginController', PublicLoginController);

    PublicLoginController.$inject = ['$location', '$state', 'sessionService', 'Token'];

    function PublicLoginController($location, $state, sessionService, Token) {
        var vm = this;

        vm.credentials = {
            username: '',
            password: '',
            remember: false
        };

        vm.login = login;

        function login() {
            var newToken = new Token({ username: vm.credentials.username, password: vm.credentials.password });

            newToken.$save().then(
                function (token) { // success
                    // store token
                    sessionService.beginSession(token.Token);

                    // redirect back to the referrer or to the app root
                    var redirectState = $location.search().redirect_state; /* jshint ignore:line*/
                    if (redirectState) {
                        $state.go(redirectState);
                    } else {
                        $location.path('/');
                    }
                },
                function (error) { // error
                    if (error.status === 400) {
                        vm.invalidCredentials = true;
                    }
                });
        }
    }
})();
