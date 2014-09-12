(function () {
    angular
        .module('gnap-example-app')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('main', {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController'
                });
        }]);
})();