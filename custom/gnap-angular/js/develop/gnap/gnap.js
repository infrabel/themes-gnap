'use strict';

(function () {
    angular
        .module('gnap', ['gnap.tpls',
                         'ngAnimate',
                         'ui.bootstrap',
                         'LocalStorageModule',
                         'pascalprecht.translate']);

    angular
        .module('gnap.tpls', ['template/gnap/breadcrumbs/breadcrumbs.html',
                              'template/gnap/locale-selector/locale-selector.html',
                              'template/gnap/search/search.html',
                              'template/gnap/sidebar/sidebar-toggler.html',
                              'template/gnap/sidebar/sidebar.html']);

    // configure the local storage service to use 'gnap' as the key prefix
    angular
        .module('gnap')
        .config(localStorageConfiguration);

    localStorageConfiguration.$inject = ['localStorageServiceProvider'];

    function localStorageConfiguration(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('gnap');
    }

    // configure the datepicker to look more like the ace one
    angular
        .module('gnap')
        .config(datepickerConfiguration);

    datepickerConfiguration.$inject = ['datepickerConfig'];

    function datepickerConfiguration(datepickerConfig) {
        datepickerConfig.showWeeks = false;
        datepickerConfig.startingDay = '1';
        datepickerConfig.formatMonth = 'MMM';
    }
})();
