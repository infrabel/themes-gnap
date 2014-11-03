'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .controller('NotFoundController', NotFoundController);

    NotFoundController.$inject = [];

    function NotFoundController() {
    }
})();
