'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main.notfound',
        state: {
            url: '/notfound',
            templateUrl: 'app/main/notfound/notfound.html',
            controller: 'NotFoundController as vm'
        },
        title: {
            text: 'Not Found'
        },
        breadcrumb: {
            title: 'Not Found'
        }
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    }

    onEnter.$inject = ['titleService', 'breadcrumbsService'];

    function onEnter(titleService, breadcrumbsService) {
        titleService.appendTitle(stateSettings.title);

        breadcrumbsService.addBreadcrumb(stateSettings.breadcrumb);
    }

    onExit.$inject = ['titleService', 'breadcrumbsService'];

    function onExit(titleService, breadcrumbsService) {
        titleService.removeLastTitle();

        breadcrumbsService.removeLastBreadcrumb();
    }
})();
