'use strict';

/**
 * @desc service that handles client-side sessions
 * @file session.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('sessionService', sessionService);

    sessionService.$inject = ['tokenManagerService'];

    function sessionService(tokenManagerService) {

        var user = {};

        readUserInformationFromToken();

        return {
            beginSession: beginSession,
            abandonSession: abandonSession,
            user: user
        };

        function beginSession(token) {
            tokenManagerService.setToken(token);
            readUserInformationFromToken();
        }

        function abandonSession() {
            tokenManagerService.clearToken();
            readUserInformationFromToken();
        }

        function readUserInformationFromToken() {
            // clear user object
            /* jshint forin:false */
            for (var member in user) {
                delete user[member];
            }
            /* jshint forin:true */

            var token = tokenManagerService.getParsedToken();
            if (token) {
                user.isAuthenticated = true;

                /* jshint camelcase:false */
                user.username = token.unique_name;
                user.name = token.given_name + ' ' + token.family_name;

                // copy all claims to the user object
                for (member in token) {
                    if (token.hasOwnProperty(member)) {
                        user[member] = token[member];
                    }
                }
            } else {
                user.isAuthenticated = false;
            }
        }
    }
})();
