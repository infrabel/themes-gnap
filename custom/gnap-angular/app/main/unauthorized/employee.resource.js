'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .factory('Employee', Employee);

    Employee.$inject = ['$resource'];

    function Employee($resource) {
        return $resource('/api/employees');
    }
})();
