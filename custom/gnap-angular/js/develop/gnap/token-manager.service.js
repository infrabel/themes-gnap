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
        };

        function clearToken() {
            localStorageService.remove('token');
        };

        function getToken() {
            return localStorageService.get('token');
        };

        function getParsedToken() {
            var token = getToken();
            if (token) {
                return parseToken(token);
            }
            return null;
        };

        function parseToken(token) {
            var segments = token.split(".");
            if (segments.length !== 3) {
                throw new Error("Invalid JWT");
            }
            var claims = segments[1];
            return angular.fromJson(decodeURIComponent(escape(window.atob(claims))));
        };
    };
})();