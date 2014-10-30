'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-date-picker', GnapDatepickerController);

    GnapDatepickerController.$inject = [];

    function GnapDatepickerController() {
        var vm = this;

        vm.date = new Date();
    }
})();
