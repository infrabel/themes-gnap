'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('MainUnauthorizedController', MainUnauthorizedController);

    MainUnauthorizedController.$inject = ['employees'];

    function MainUnauthorizedController(employees) {
        console.log(employees);
    }
})();
