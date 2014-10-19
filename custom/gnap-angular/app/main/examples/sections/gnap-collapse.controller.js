'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-collapse', GnapCollapseController);

    GnapCollapseController.$inject = [];

    function GnapCollapseController() {
        var vm = this;

        vm.isCollapsed = false;
    }
})();
