'use strict';

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
            request: function (request) {
                var token = tokenManagerService.getToken();

                // put session token in authorization header
                if (token) {
                    request.headers = request.headers || {};
                    request.headers.Authorization = 'Bearer ' + token;
                }

                return request;
            }
        };
    }
})();
