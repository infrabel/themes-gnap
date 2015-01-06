'use strict';

/**
 * @desc service that keeps track of the current breadcrumbs
 * @file breadcrumbs.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('breadcrumbsService', breadcrumbsService);

    breadcrumbsService.$inject = ['$translate'];

    function breadcrumbsService($translate) {
        var breadcrumbs = {
            crumbs: []
        };

        return {
            breadcrumbs: breadcrumbs,
            addBreadcrumb: addBreadcrumb,
            removeLastBreadcrumb: removeLastBreadcrumb
        };

        function addBreadcrumb(value) {
            // resolve _title: if a titleTranslationId is given then the translation will be loaded async,
            // otherwise the value of title is copied into _title
            if (value.titleTranslationId) {
                $translate(value.titleTranslationId).then(function (translation) {
                    value._title = translation;
                });
            } else {
                value._title = value.title;
            }

            breadcrumbs.crumbs.push(value);
        }

        function removeLastBreadcrumb() {
            breadcrumbs.crumbs.pop();
        }
    }
})();
