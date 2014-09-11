(function () {
    angular
        .module('gnap-example-app')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('main.error-404', {
                    url: '/error-404',
                    templateUrl: 'app/error-404/error-404.html',
                    controller: 'Error404Controller'
                });
        }]);
})();