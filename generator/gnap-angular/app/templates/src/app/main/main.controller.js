'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .controller('MainController', MainController);

    MainController.$inject = [];

    function MainController() {
        var vm = this;

        vm.search = function() {
            window.alert('Searching for ' + vm.keywords);
        };
    }
})();