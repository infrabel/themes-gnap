'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .config(tooltipConfiguration)
        .config(urlRouterConfiguration)
        .config(translationConfiguration)
        .config(localeConfiguration)
        .config(titleConfiguration)
        .run(localeInitalization)
        .run(select2Initialization);

    var defaultPage = '/getting-started';

    var supportedLanguages = [
        { name: 'nl', title: 'Nederlands', default: true },
        { name: 'fr', title: 'Français' },
        { name: 'en', title: 'English' }
    ];

    titleConfiguration.$inject = ['titleServiceProvider'];

    function titleConfiguration(titleServiceProvider) {
        titleServiceProvider.setDefaultTitle({ text: '' });
        titleServiceProvider.setSeparator('-');

        titleServiceProvider.setPrefix({ text: '<%= appTitle %> &raquo;' });
        titleServiceProvider.setSuffix({ text: '' });
    }

    tooltipConfiguration.$inject = ['$tooltipProvider'];

    function tooltipConfiguration($tooltipProvider) {
        $tooltipProvider.options({
            appendToBody: true
        });
    }

    urlRouterConfiguration.$inject = ['$urlRouterProvider'];

    function urlRouterConfiguration($urlRouterProvider) {
        $urlRouterProvider.otherwise(defaultPage);
    }

    translationConfiguration.$inject = ['$translateProvider'];

    function translationConfiguration($translateProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/translations.{lang}.json', // if not local, e.g.: https://server/translations/{lang}/{part}
            loadFailureHandler: 'partialLoaderErrorHandler'
        });
    }

    localeConfiguration.$inject = ['tmhDynamicLocaleProvider'];

    function localeConfiguration(tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('node_modules/<%= themeName %>/js/angular/i18n/angular-locale_{{locale}}.min.js');
    }

    select2Initialization.$inject = ['uiSelect2Config'];

    function select2Initialization(uiSelect2Config) {
        uiSelect2Config.allowClear = true;
        uiSelect2Config.shouldFocusInput = function () { return false; };
    }

    localeInitalization.$inject = ['localeService'];

    function localeInitalization(localeService) {
        localeService.initialize(supportedLanguages);
    }
})();