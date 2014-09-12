(function () {
    angular
        .module('gnap-example-app')

        .config(['$tooltipProvider', function ($tooltipProvider) {
            $tooltipProvider.options({
                appendToBody: true
            });
        }])

        .config(['$urlRouterProvider', function ($urlRouterProvider) {
            $urlRouterProvider
                .otherwise("/about");
        }]);
})();