/**
 * @desc service that keeps track of the current breadcrumbs
 * @file breadcrumbs.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('breadcrumbsService', breadcrumbsService);

    function breadcrumbsService() {
        var breadcrumbs = {
            crumbs: []
        };

        function setBreadcrumbs(value) {
            breadcrumbs.crumbs = value;
        };

        return {
            breadcrumbs: breadcrumbs,
            setBreadcrumbs: setBreadcrumbs
        };
    };
})();