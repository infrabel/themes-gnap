'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'public.login',
        state: {
            url: '/login',
            templateUrl: 'app/public/login/login.html',
            controller: 'PublicLoginController as vm'
        },
        title: {
            textTranslationId: 'public.login.title'
        },
        translations: 'app/public/login'
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    }

    onEnter.$inject = ['titleService'];

    function onEnter(titleService) {
        titleService.setTitle(stateSettings.title);
    }

    onExit.$inject = ['titleService'];

    function onExit(titleService) {
        titleService.clearTitle();
    }

    if (stateSettings.translations) {
        stateSettings.state.resolve = stateSettings.state.resolve || {};
        stateSettings.state.resolve.translations = refreshTranslations;
    }

    refreshTranslations.$inject = ['$translatePartialLoader', '$translate'];

    function refreshTranslations($translatePartialLoader, $translate) {
        $translatePartialLoader.addPart(stateSettings.translations);
        return $translate.refresh();
    }
})();
