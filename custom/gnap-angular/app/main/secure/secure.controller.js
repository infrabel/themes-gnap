'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('MainSecureController', MainSecureController);

    MainSecureController.$inject = ['bankAccounts'];

    function MainSecureController(bankAccounts) {
        console.log(bankAccounts);
    }
})();
