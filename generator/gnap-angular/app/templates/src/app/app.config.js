'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .config(urlRouterConfiguration)
        .config(titleConfiguration)
        .config(authConfiguration)
        .run(handleStateChangeError);

    var defaultPage = '/getting-started';

    titleConfiguration.$inject = ['titleServiceProvider'];

    function titleConfiguration(titleServiceProvider) {
        titleServiceProvider.setDefaultTitle({ text: '' });
        titleServiceProvider.setSeparator('-');

        titleServiceProvider.setPrefix({ text: '<%= appTitle %> &raquo;' });
        titleServiceProvider.setSuffix({ text: '' });
    }

    urlRouterConfiguration.$inject = ['$urlRouterProvider'];

    function urlRouterConfiguration($urlRouterProvider) {
        // when there is an empty route, redirect to the default page
        $urlRouterProvider.when('', defaultPage)
                          .when('/', defaultPage);

        // when no matching route found redirect to error 404
        $urlRouterProvider.otherwise('/notfound');
    }

    authConfiguration.$inject = ['$httpProvider'];

    function authConfiguration($httpProvider) {
        $httpProvider.interceptors.push('authenticationInterceptor');
    }

    handleStateChangeError.$inject = ['$rootScope', '$state', '$location', 'sessionService', 'unhandledErrorChannel'];

    function handleStateChangeError($rootScope, $state, $location, sessionService, unhandledErrorChannel) {
        $rootScope.$on('$stateChangeError',
            function (event, toState, toParams, fromState, fromParams, error) {

                // unauthorized
                if (error.status === 401) {
                    event.preventDefault();

                    // end the current session
                    sessionService.abandonSession();

                    // go to login screen (only once!)
                    if (toState.name !== 'public.login') {
                        $location.url('/login').search({ 'redirect_state': toState.name });
                    }
                }

                // forbidden
                else if (error.status === 403) {
                    event.preventDefault();

                    // redirect to 'forbidden' error page
                    $state.go('main.forbidden');
                }

                    // any other case
                else {
                    unhandledErrorChannel.errorOccurred(error);
                }
            });
    }
})();
