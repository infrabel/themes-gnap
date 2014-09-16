(function () {
    angular
        .module('gnap-example-app', ['gnap',
                                     'ui.bootstrap',
                                     'ui.router',
                                     'ngSanitize',
                                     'ngBootbox',
                                     'localytics.directives',
                                     'pascalprecht.translate',
                                     'tmh.dynamicLocale',
                                     'datatables']);
})();