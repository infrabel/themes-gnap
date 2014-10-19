'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-date-range-picker', GnapDaterangepickerController);

    GnapDaterangepickerController.$inject = [];

    function GnapDaterangepickerController() {
        var vm = this;

        vm.range = {
            dateStart: new Date(2014, 0, 7),
            dateEnd: new Date(2014, 7, 14)
        };

        vm.iconPosition = 'left';
    }
})();
