'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .factory('BankAccount', BankAccount);

    BankAccount.$inject = ['$resource'];

    function BankAccount($resource) {
        return $resource('/api/bankaccounts');
    }
})();
