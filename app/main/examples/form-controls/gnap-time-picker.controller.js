'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-time-picker', GnapTimepickerController);

    GnapTimepickerController.$inject = [];

    function GnapTimepickerController() {
        var vm = this;

        vm.sometime = new Date(2014, 1, 1, 10, 30, 0);
    }
})();
