'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('MainController', MainController);

    MainController.$inject = ['$window', '$location', '$anchorScroll'];

    function MainController($window, $location, $anchorScroll) {
        /* jshint validthis: true */
        var vm = this;

        vm.search = function() {
            $window.alert('Searching for ' + vm.keywords);
        };

        vm.scrollToTop = function() {            
            $location.hash('main-container');
            $anchorScroll();
        };
    }
})();
