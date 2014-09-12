(function () {
    angular
        .module('gnap-example-app')
        .config(mainRouteConfig);

    mainRouteConfig.$inject = ['$stateProvider'];

    function mainRouteConfig($stateProvider) {
        $stateProvider
            .state('main', {
                templateUrl: 'app/main/main.html',
                controller: 'MainController'
            });
    };
})();
