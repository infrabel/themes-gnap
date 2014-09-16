(function () {
    angular
        .module('gnap-example-app')
        .config(tooltipConfiguration)
        .config(urlRouterConfiguration)
        .config(translationConfiguration)
        .config(localeConfiguration)
        .run(localeInitalization);

    var defaultPage = '/about';

    var supportedLanguages = [
        { name: 'nl', title: 'Nederlands', default: true },
        { name: 'fr', title: 'Français' },
        { name: 'en', title: 'English' }
    ];

    tooltipConfiguration.$inject = ['$tooltipProvider'];

    function tooltipConfiguration($tooltipProvider) {
        $tooltipProvider.options({
            appendToBody: true
        });
    };

    urlRouterConfiguration.$inject = ['$urlRouterProvider'];

    function urlRouterConfiguration($urlRouterProvider) {
        $urlRouterProvider.otherwise(defaultPage);
    };

    translationConfiguration.$inject = ['$translateProvider'];

    function translationConfiguration($translateProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/translations.{lang}.json', // if not local, e.g.: https://server/translations/{lang}/{part}
            loadFailureHandler: 'partialLoaderErrorHandler'
        });
    };

    localeConfiguration.$inject = ['tmhDynamicLocaleProvider'];

    function localeConfiguration(tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('js/angular/i18n/angular-locale_{{locale}}.min.js');
    };

    localeInitalization.$inject = ['localeService'];

    function localeInitalization(localeService) {
        localeService.initialize(supportedLanguages);
    };
})();