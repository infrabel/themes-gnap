'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('MainTypographyController', MainTypographyController);

    MainTypographyController.$inject = [];

    function MainTypographyController() {
        var vm = this;

        vm.isHorizontalList = false;
    }
})();
