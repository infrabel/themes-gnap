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
        };

        function buildTitle() {
            var title = '';

            if (titleService.prefix)
                title += titleService.prefix + ' ';

            title += titleService.title.parts.join(' ' + titleService.separator + ' ');

            if (titleService.suffix)
                title += ' ' + titleService.suffix;

            return title;
        };
    }
})();