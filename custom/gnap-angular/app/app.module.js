(function () {
    angular
        .module('gnap-example-app', ['gnap',
                                     'ui.bootstrap',
                                     'ui.router',
                                     'ngSanitize',
                                     'ngBootbox',
                                     'localytics.directives',
                                     'datatables']);

        //.controller('main', ['$scope', 'sidebarService', 'breadcrumbsService', function ($scope, sidebarService, breadcrumbsService) {
        //    $scope.search = function () {
        //        alert('Searching for ' + $scope.keywords);
        //    }
        //}]);
})();