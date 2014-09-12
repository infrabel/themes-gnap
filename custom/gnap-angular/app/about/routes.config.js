(function () {
    angular
        .module('gnap-example-app')
        .config(aboutRouteConfig);

    aboutRouteConfig.$inject = ['$stateProvider'];

    function aboutRouteConfig($stateProvider) {
        $stateProvider
            .state('main.about', {
                url: '/about',
                templateUrl: 'app/about/about.html',
                controller: 'AboutController'
            });
    };
})();
