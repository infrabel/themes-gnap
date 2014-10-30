'use strict';

/**
 * @desc session dropdown logic
 * @file session-dropdown.directive.js
 * @example <li session-dropdown></li>
 */
(function () {
    angular
        .module('gnap-example-app')
        .directive('sessionDropdown', sessionDropdown);

    sessionDropdown.$inject = ['$state', 'sessionService'];

    function sessionDropdown($state, sessionService) {
        return {
            restrict: 'A',
            templateUrl: 'app/main/session-dropdown.html',
            controllerAs: 'vm',
            controller: sessionDropdownController
        };

        function sessionDropdownController() {
            /* jshint validthis: true */
            var vm = this;

            vm.name = sessionService.user.name;
            vm.isAuthenticated = sessionService.user.isAuthenticated;

            vm.logout = function () {
                sessionService.abandonSession();
                $state.go('public.login');
            };

            vm.login = function () {
                $state.go('public.login');
            };
        }
    }
})();
