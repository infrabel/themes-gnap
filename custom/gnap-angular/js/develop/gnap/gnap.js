'use strict';

(function () {
    angular
        .module('gnap', ['gnap.tpls',
                         'ui.router',               // We use UI Router as our default routing solution
                         'LocalStorageModule',      // We pre-configure the local storage key
                         'pascalprecht.translate',  // We provide a translation solution out of the box
                         'tmh.dynamicLocale',       // We provide a translation solution out of the box
                         'ngAnimate',               // We provide some basic animation on our directives
                         'ui.bootstrap',            // Our UI depends on Bootstrap
                         'ui.select2',              // We have chosen select2 as our default dropdown
                         'ngProgressLite',          // We use nProgress as our loading indicator
                         'ngBootbox',               // We use bootbox for our dialog
                         'datatables']);            // We provide datables as our default table solution

    angular
        .module('gnap.tpls', ['template/gnap/breadcrumbs/breadcrumbs.html',
                              'template/gnap/locale-selector/locale-selector.html',
                              'template/gnap/search/search.html',
                              'template/gnap/sidebar/sidebar-toggler.html',
                              'template/gnap/sidebar/sidebar.html']);

    angular
        .module('gnap')
        .config(localStorageConfiguration)
        .config(datepickerConfiguration)
        .config(errorHandlingConfiguration)
        .config(tooltipConfiguration)
        .config(translationConfiguration)
        .config(localeConfiguration)
        .run(select2Initialization)
        .run(localeInitalization)
        .run(loadDefaultTranslations);

    // TODO: These languages need to come from a provider, issue #92
    var supportedLanguages = [
        { name: 'nl', title: 'Nederlands', 'default': true },
        { name: 'fr', title: 'Français' },
        { name: 'en', title: 'English' }
    ];

    // configure the local storage service to use 'gnap' as the key prefix
    localStorageConfiguration.$inject = ['localStorageServiceProvider'];

    function localStorageConfiguration(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('gnap');
    }

    // configure the datepicker to look more like the ace one
    datepickerConfiguration.$inject = ['datepickerConfig'];

    function datepickerConfiguration(datepickerConfig) {
        datepickerConfig.showWeeks = false;
        datepickerConfig.startingDay = '1';
        datepickerConfig.formatMonth = 'MMM';
    }

    // configure the select2 to look more like the ace one
    select2Initialization.$inject = ['uiSelect2Config'];

    function select2Initialization(uiSelect2Config) {
        uiSelect2Config.allowClear = true;
        uiSelect2Config.shouldFocusInput = function () { return false; };
    }

    // configure the tooltip to prevent bugs with buttons
    tooltipConfiguration.$inject = ['$tooltipProvider'];

    function tooltipConfiguration($tooltipProvider) {
        $tooltipProvider.options({
            appendToBody: true
        });
    }

    // configure the supported languages
    localeInitalization.$inject = ['localeService'];

    function localeInitalization(localeService) {
        localeService.initialize(supportedLanguages);
    }

    // load the default gnap translations
    loadDefaultTranslations.$inject = ['$translate', '$translatePartialLoader'];

    function loadDefaultTranslations($translate, $translatePartialLoader) {
        $translatePartialLoader.addPart('js/gnap');
        $translate.refresh();
    }

    // wire up translation resolving
    translationConfiguration.$inject = ['$translateProvider'];

    function translationConfiguration($translateProvider) {
        $translateProvider.useLoader('$translatePartialLoader', {
            urlTemplate: '{part}/translations.{lang}.json', // if not local, e.g.: https://server/translations/{lang}/{part}
            loadFailureHandler: 'partialLoaderErrorHandler'
        });
    }

    // wire up locale configuration
    localeConfiguration.$inject = ['tmhDynamicLocaleProvider'];

    function localeConfiguration(tmhDynamicLocaleProvider) {
        tmhDynamicLocaleProvider.localeLocationPattern('js/angular/i18n/angular-locale_{{locale}}.min.js');
    }

    // wire up error handling
    errorHandlingConfiguration.$inject = ['$provide'];

    function errorHandlingConfiguration($provide) {
        $provide.decorator('$exceptionHandler', extendExceptionHandler);

        extendExceptionHandler.$inject = ['$delegate', '$injector'];

        function extendExceptionHandler($delegate, $injector) {
            return function (exception, cause) {
                $delegate(exception, cause);
                $injector.get('unhandledErrorChannel').errorOccurred(exception);
            };
        }
    }
})();
