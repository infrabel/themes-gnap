'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('UnauthorizedController', UnauthorizedController);

    UnauthorizedController.$inject = ['employees'];

    function UnauthorizedController(employees) {
        console.log(employees);
    }
})();
