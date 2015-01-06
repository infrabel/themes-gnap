'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-prompt-dialog', GnapPromptDialogController);

    GnapPromptDialogController.$inject = ['$window'];

    function GnapPromptDialogController($window) {
        var vm = this;

        vm.accept = function (name) {
            $window.alert('Hello ' + name);
        };

        vm.cancel = function () {
            $window.alert('You cancelled!');
        };
    }
})();
