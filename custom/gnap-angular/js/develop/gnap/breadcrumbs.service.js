/**
 * @desc service that keeps track of the current breadcrumbs
 * @file breadcrumbs.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('breadcrumbsService', breadcrumbsService);

    function breadcrumbsService() {
        var breadcrumbs = [];

        return {
            setBreadcrumbs: setBreadcrumbs,
            getBreadcrumbs: getBreadcrumbs
        };

        function setBreadcrumbs(value) {
            breadcrumbs = value;
        };

        function getBreadcrumbs() {
            return breadcrumbs;
        };
    };
})();