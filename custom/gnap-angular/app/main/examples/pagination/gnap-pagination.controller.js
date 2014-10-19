'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-pagination', GnapPaginationController);

    GnapPaginationController.$inject = [];

    function GnapPaginationController() {
        var vm = this;

        vm.totalItems = 164;
        vm.currentPage = 4;
    }
})();
