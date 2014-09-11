(function () {
    angular
        .module('gnap-app')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('main', {
                    templateUrl: 'app/main/main.html',
                    controller: 'MainController'
                });
        }]);
})();