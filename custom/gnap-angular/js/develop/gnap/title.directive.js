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
            template: '<title>{{ buildTitle() }}</title>',
            link: link
        };

        function link(scope) {
            // get the current title and link them to the scope
            scope.buildTitle = buildTitle;
        };

        function buildTitle() {
            // TODO: Get separater from config
            return titleService.title.parts.join(' - ');
        };
    }
})();