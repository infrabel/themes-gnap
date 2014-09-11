(function () {
    angular
        .module('gnap-app', ['gnap',
                             'ui.bootstrap',
                             'ngBootbox',
                             'localytics.directives',
                             'datatables',
                             'ngSanitize',
                             'ui.router'])

        .config(['$tooltipProvider', function ($tooltipProvider) {
            $tooltipProvider.options({
                appendToBody: true
            });
        }])

        .config(['$urlRouterProvider', function ($urlRouterProvider) {
            $urlRouterProvider
                .otherwise("/about");
        }])

        .controller('main', ['$scope', 'sidebarService', 'breadcrumbsService', function ($scope, sidebarService, breadcrumbsService) {
            $scope.search = function () {
                alert('Searching for ' + $scope.keywords);
            }
        }]);
})();