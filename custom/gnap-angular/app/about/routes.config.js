(function () {
    angular
        .module('gnap-app')
        .config(['$stateProvider', function ($stateProvider) {
            $stateProvider
                .state('main.about', {
                    url: '/about',
                    templateUrl: 'app/about/about.html',
                    controller: 'AboutController'
                });
        }]);
})();