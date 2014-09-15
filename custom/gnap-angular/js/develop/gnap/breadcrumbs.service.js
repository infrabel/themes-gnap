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

        function addBreadcrumb(value) {
            breadcrumbs.crumbs.push(value);
        };

        function removeLastBreadcrumb() {
            breadcrumbs.crumbs.pop();
        };

        return {
            breadcrumbs: breadcrumbs,
            addBreadcrumb: addBreadcrumb,
            removeLastBreadcrumb: removeLastBreadcrumb
        };
    };
})();