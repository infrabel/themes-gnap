'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'public',
        state: {
            abstract: true,
            templateUrl: 'app/public/public.html',
            controller: 'PublicController as vm'
        }
    };

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    }
})();
