'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('MainController', MainController);

    MainController.$inject = ['$window'];

    function MainController($window) {
        var vm = this;

        vm.search = function() {
            $window.alert('Searching for ' + vm.keywords);
        };
    }
})();
