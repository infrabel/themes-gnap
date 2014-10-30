'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('SecureController', SecureController);

    SecureController.$inject = ['bankAccounts'];

    function SecureController(bankAccounts) {
        console.log(bankAccounts);
    }
})();
