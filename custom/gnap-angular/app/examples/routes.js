angular.module('gnap-app')
     .config(['$stateProvider', function ($stateProvider) {

        $stateProvider
            .state('main.examples', {
                url: '/examples',
                templateUrl: 'app/examples/examples.html',
                controller: 'ExamplesController'
            });
    }]);