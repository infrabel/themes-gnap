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
        }])

        .config(['$translateProvider', function ($translateProvider) {
            $translateProvider.useLoader('$translatePartialLoader', {
                urlTemplate: '{part}/translations.{lang}.json',
                loadFailureHandler: "partialLoaderErrorHandler"
            });
        }])

        .config(['tmhDynamicLocaleProvider', function (tmhDynamicLocaleProvider) {
            tmhDynamicLocaleProvider.localeLocationPattern('js/angular/i18n/angular-locale_{{locale}}.min.js');
        }])

        .run(['localeService', function (localeService) {
            localeService.initialize(
                [
                    { name: 'nl', title: 'Nederlands', default: true },
                    { name: 'fr', title: 'Français' },
                    { name: 'en', title: 'English' }
                ]);
        }]);

})();