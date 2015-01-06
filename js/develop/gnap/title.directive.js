'use strict';

/**
 * @desc Page Title
 * @file title.directive
 * @example <title gnap-title></title>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapTitle', gnapTitle);

    gnapTitle.$inject = ['titleService'];

    function gnapTitle(titleService) {

        return {
            replace: true,
            restrict: 'A',
            scope: {},
            template: '<title ng-bind-html="buildTitle()"><title>',
            link: link
        };

        function link(scope) {
            // get the current title and link them to the scope
            scope.buildTitle = buildTitle;
        }

        function buildTitle() {
            var title = '';

            if (titleService.prefix._text) {
                title += titleService.prefix._text + ' ';
            }

            title += joinTitleParts(titleService.title.parts);

            if (titleService.suffix._text) {
                title += ' ' + titleService.suffix._text;
            }

            return title;
        }

        function joinTitleParts(parts) {
            var out = [];

            for (var i = 0; i < parts.length; i++) {
                if (parts[i]._text !== '') {
                    out.push(parts[i]._text);
                }
            }

            return out.join(' ' + titleService.separator + ' ');
        }
    }
})();
