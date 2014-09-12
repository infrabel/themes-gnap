(function () {
    angular
        .module('gnap-example-app')
        .config(typographyRouteConfig);

    typographyRouteConfig.$inject = ['$stateProvider'];

    function typographyRouteConfig($stateProvider) {
        $stateProvider
            .state('main.typography', {
                url: '/typography',
                templateUrl: 'app/typography/typography.html',
                controller: 'TypographyController'
            });
    };
})();
