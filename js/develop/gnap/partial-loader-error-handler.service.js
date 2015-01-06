'use strict';

/**
 * @desc partial loader error handler
 * @file partial-loader-error-handler.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('partialLoaderErrorHandler', partialLoaderErrorHandler);

    partialLoaderErrorHandler.$inject = ['$q'];

    function partialLoaderErrorHandler($q) {
        return function (partName, languageKey) {
            console.log('Translations file could not be loaded for language ' + languageKey + ', part: ' + partName);
            return $q.when({});
        };
    }
})();
