(function () {
    angular
        .module('gnap-example-app')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('main.typography', {
                    url: '/typography',
                    templateUrl: 'app/typography/typography.html',
                    controller: 'TypographyController'
                });
        }]);
})();