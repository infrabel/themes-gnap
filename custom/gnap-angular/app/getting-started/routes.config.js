(function () {
    angular
        .module('gnap-example-app')
        .config(gettingStartedRouteConfig);

    gettingStartedRouteConfig.$inject = ['$stateProvider'];

    function gettingStartedRouteConfig($stateProvider) {
        $stateProvider
            .state('main.getting-started', {
                url: '/getting-started',
                templateUrl: 'app/getting-started/getting-started.html',
                controller: 'GettingStartedController'
            });
    };
})();