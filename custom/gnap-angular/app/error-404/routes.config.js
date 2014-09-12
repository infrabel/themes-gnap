(function () {
    angular
        .module('gnap-example-app')
        .config(error404RouteConfig);

    error404RouteConfig.$inject = ['$stateProvider'];

    function error404RouteConfig($stateProvider) {
        $stateProvider
            .state('main.error-404', {
                url: '/error-404',
                templateUrl: 'app/error-404/error-404.html',
                controller: 'Error404Controller'
            });
    };
})();
