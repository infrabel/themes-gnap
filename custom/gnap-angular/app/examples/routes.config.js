(function () {
    angular
        .module('gnap-example-app')
        .config(examplesRouteConfig);

    examplesRouteConfig.$inject = ['$stateProvider'];

    function examplesRouteConfig($stateProvider) {
        $stateProvider
            .state('main.examples', {
                url: '/examples',
                templateUrl: 'app/examples/examples.html',
                controller: 'ExamplesController'
            });
    };
})();
