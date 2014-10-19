/**
 * @desc authentication interceptor
 * @file authentication.interceptor.js
 */
(function () {
    angular
        .module('gnap')
        .factory('authenticationInterceptor', AuthenticationInterceptor);

    AuthenticationInterceptor.$inject = ['$q', '$location', 'tokenManagerService'];

    function AuthenticationInterceptor($q, $location, tokenManagerService) {
        return {
            request: function (config) {
                var token = tokenManagerService.getToken();

                // put session token in authorization header
                if (token) {
                    config.headers = config.headers || {};
                    config.headers.Authorization = 'Bearer ' + token;
                }

                return config;
            }
        };
    };
})();