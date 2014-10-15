(function () {
    angular
        .module('gnap-example-app')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main.unauthorized',
        state: {
            url: '/unauthorized',
            templateUrl: 'app/main/unauthorized/unauthorized.html',
            controller: 'UnauthorizedController as vm',
            resolve: {
                employees: function(Employee) {
                    return Employee.query().$promise;
                }
            }
        },
        title: {
            text: 'Unauthorized'
        },
        breadcrumb: {
            title: 'Unauthorized'
        },
        sidebarKey: 'Unauthorized'
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
