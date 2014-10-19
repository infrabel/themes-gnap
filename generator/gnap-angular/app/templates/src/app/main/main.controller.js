'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .controller('MainController', MainController);

    MainController.$inject = ['$window'];

    function MainController($window) {
        /* jshint validthis: true */
        var vm = this;

        vm.search = function() {
            $window.alert('Searching for ' + vm.keywords);
        };
    }
})();
