(function () {
    angular
        .module('gnap-example-app')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('main.error-500', {
                    url: '/error-500',
                    templateUrl: 'app/error-500/error-500.html',
                    controller: 'Error500Controller'
                });
        }]);
})();