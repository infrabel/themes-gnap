'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .factory('BankAccount', BankAccount);

    BankAccount.$inject = ['$resource'];

    function BankAccount($resource) {
        return $resource('http://example-gnap.azurewebsites.net/api/bankaccounts');
    }
})();
