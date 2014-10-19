'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-stacked-progressbar', GnapStackedProgressbarController);

    GnapStackedProgressbarController.$inject = [];

    function GnapStackedProgressbarController() {
        var vm = this;

        vm.collection = [];

        vm.collection.push({
            value: 20,
            type: 'success'
        });

        vm.collection.push({
            value: 15,
            type: 'warning'
        });

        vm.collection.push({
            value: 25,
            type: 'error'
        });
    }
})();
