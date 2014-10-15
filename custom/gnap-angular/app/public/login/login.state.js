(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'public.login',
        state: {
            url: '/login',
            templateUrl: 'app/public/login/login.html',
            controller: 'LoginController as vm'
        },
        title: {
            text: 'Login'
        },
        breadcrumb: {
            title: 'Login'
        },
        sidebarKey: 'login'
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    };

    onEnter.$inject = [];

    function onEnter() {
    };

    onExit.$inject = [];

    function onExit() {
    };

    if (stateSettings.translations) {
        stateSettings.state.resolve = stateSettings.state.resolve || {};
        stateSettings.state.resolve.translations = function ($translatePartialLoader, $translate) {
            $translatePartialLoader.addPart(stateSettings.translations);
            return $translate.refresh();
        };
    };
})();
