'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .controller('PublicController', PublicController);

    PublicController.$inject = [];

    function PublicController() {
    }
})();
