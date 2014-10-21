'use strict';

/**
 * @desc service that manages JWT tokens
 * @file token-manager.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('tokenManagerService', tokenManagerService);

    tokenManagerService.$inject = ['localStorageService'];

    function tokenManagerService(localStorageService) {

        return {
            setToken: setToken,
            clearToken: clearToken,
            getToken: getToken,
            getParsedToken: getParsedToken
        };

        function setToken(token) {
            localStorageService.set('token', token);
        }

        function clearToken() {
            localStorageService.remove('token');
        }

        function getToken() {
            return localStorageService.get('token');
        }

        function getParsedToken() {
            var token = getToken();
            if (token) {
                return parseToken(token);
            }
            return null;
        }

        function parseToken(token) {
            var segments = token.split('.');

            if (segments.length !== 3) {
                throw new Error('Invalid JWT');
            }

            var decoded = urlBase64Decode(segments[1]);
            if (!decoded) {
                throw new Error('Cannot decode the token');
            }

            return angular.fromJson(decoded);
        }

        function urlBase64Decode(str) {
            var output = str.replace('-', '+').replace('_', '/');

            switch (output.length % 4) {
                case 0: { break; }
                case 2: { output += '=='; break; }
                case 3: { output += '='; break; }
                default: {
                    throw 'Illegal base64url string!';
                }
            }

            return window.atob(output); // polifyll https://github.com/davidchambers/Base64.js
        }
    }
})();
