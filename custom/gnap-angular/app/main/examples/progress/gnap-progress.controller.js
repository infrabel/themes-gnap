'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-progress', GnapProgressController);

    GnapProgressController.$inject = ['ngProgressLite'];

    function GnapProgressController(ngProgressLite) {
        var vm = this;

        vm.start = function () {
            ngProgressLite.start();
        };

        vm.set40 = function () {
            ngProgressLite.set(0.4);
        };

        vm.increment = function () {
            ngProgressLite.inc();
        };

        vm.done = function () {
            ngProgressLite.done();
        };
    }
})();
