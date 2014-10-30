'use strict';

(function () {
    angular
        .module('gnap')
        .factory('Token', Token);

    Token.$inject = ['$resource'];

    function Token($resource) {
        return $resource('/api/tokens');
    }
})();
