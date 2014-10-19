'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('TypographyController', TypographyController);

    TypographyController.$inject = [];

    function TypographyController() {
        var vm = this;

        vm.isHorizontalList = false;
    }
})();
