angular
    .module('gnap', ['ngAnimate', 'LocalStorageModule']);

// configure the local storage service to use 'gnap' as the key prefix
angular.module('gnap')
    .config(['localStorageServiceProvider', function(localStorageServiceProvider){
        localStorageServiceProvider.setPrefix('gnap');
    }]);