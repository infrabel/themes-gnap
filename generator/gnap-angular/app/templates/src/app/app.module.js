'use strict';

(function () {
    angular
        .module('<%= appName %>', 
                ['gnap',
                 'ui.bootstrap',
                 'ui.router',
                 'ngSanitize',
                 'ngResource',
                 'ngBootbox',
                 'ngProgressLite',
                 'ui.select2',
                 'pascalprecht.translate',
                 'tmh.dynamicLocale',
                 'datatables']);
})();