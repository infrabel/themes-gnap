'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-confirm-dialog', GnapConfirmDialogController);

    GnapConfirmDialogController.$inject = ['$window'];

    function GnapConfirmDialogController($window) {
        var vm = this;

        vm.confirm = function () {
            $window.alert('You were sure!');
        };

        vm.cancel = function () {
            $window.alert('You weren\'t sure!');
        };
    }
})();
