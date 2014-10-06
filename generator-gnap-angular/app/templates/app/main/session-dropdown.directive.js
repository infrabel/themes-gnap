/**
 * @desc session dropdown logic
 * @file session-dropdown.directive.js
 * @example <li session-dropdown></li>
 */
(function () {
    angular
        .module('<%= appName %>')
        .directive('sessionDropdown', sessionDropdown);

    function sessionDropdown() {
        return {
            restrict: 'A',
            templateUrl: 'app/main/session-dropdown.html'
        };
    };
})();