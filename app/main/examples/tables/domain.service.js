'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .factory('Domain', Domain);

    Domain.$inject = ['$resource'];

    function Domain($resource) {
        return $resource('app/main/examples/tables/domains.json');
    }
})();
