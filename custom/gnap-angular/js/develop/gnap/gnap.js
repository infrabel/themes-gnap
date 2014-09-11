angular
    .module('gnap', ['ngAnimate', 'LocalStorageModule', 'ui.bootstrap']);

// configure the local storage service to use 'gnap' as the key prefix
angular
    .module('gnap')
    .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('gnap');
    }]);

angular
    .module('gnap')
    .config(['datepickerConfig', function (datepickerConfig) {
        datepickerConfig.showWeeks = false;
        datepickerConfig.startingDay = '1';
        datepickerConfig.formatMonth = 'MMM';
}]);