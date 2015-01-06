'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-choice-toggle', GnapChoiceToggleController);

    GnapChoiceToggleController.$inject = [];

    function GnapChoiceToggleController() {
        var vm = this;

        vm.value = true;
    }
})();
