/**
 * @desc service that keeps track of the current breadcrumbs
 * @file breadcrumbs.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('breadcrumbsService', breadcrumbsService);

    breadcrumbsService.$inject = [];

    function breadcrumbsService() {
        var breadcrumbs = {
            crumbs: []
        };

        return {
            breadcrumbs: breadcrumbs,
            addBreadcrumb: addBreadcrumb,
            removeLastBreadcrumb: removeLastBreadcrumb
        };

        function addBreadcrumb(value) {
            breadcrumbs.crumbs.push(value);
        };

        function removeLastBreadcrumb() {
            breadcrumbs.crumbs.pop();
        };
    };
})();