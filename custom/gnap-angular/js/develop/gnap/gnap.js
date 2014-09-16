(function () {
    angular
        .module('gnap', ['ngAnimate',
                         'ui.bootstrap',
                         'LocalStorageModule']);

    // configure the local storage service to use 'gnap' as the key prefix
    angular
        .module('gnap')
        .config(localStorageConfiguration);

    localStorageConfiguration.$inject = ['localStorageServiceProvider'];

    function localStorageConfiguration(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('gnap');
    };

    // configure the datepicker to look more like the ace one
    angular
        .module('gnap')
        .config(datepickerConfiguration);

    datepickerConfiguration.$inject = ['datepickerConfig'];

    function datepickerConfiguration(datepickerConfig) {
        datepickerConfig.showWeeks = false;
        datepickerConfig.startingDay = '1';
        datepickerConfig.formatMonth = 'MMM';
    };
})();