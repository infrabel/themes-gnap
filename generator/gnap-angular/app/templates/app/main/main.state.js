(function () {
    angular
        .module('<%= appName %>')
        .config(stateConfiguration);

    var stateSettings = {
        name: 'main',
        state: {
            abstract: true,
            templateUrl: 'app/main/main.html',
            controller: 'MainController as vm'
        },
        title: {
            text: 'Home'
        },
        breadcrumb: {
            title: 'Home',
            url: '/'
        },
        translations: 'app/main'
    };

    stateSettings.state.onEnter = onEnter;
    stateSettings.state.onExit = onExit;

    stateConfiguration.$inject = ['$stateProvider'];

    function stateConfiguration($stateProvider) {
        $stateProvider.state(stateSettings.name, stateSettings.state);
    };

    onEnter.$inject = ['titleService', 'breadcrumbsService', 'sidebarService'];

    function onEnter(titleService, breadcrumbsService, sidebarService) {
        titleService.setTitle(stateSettings.title);

        setupSidebarShortcuts(sidebarService);
        setupSidebarItems(sidebarService);

        breadcrumbsService.addBreadcrumb(stateSettings.breadcrumb);
    };

    onExit.$inject = ['titleService', 'breadcrumbsService', 'sidebarService'];

    function onExit(titleService, breadcrumbsService, sidebarService) {
        titleService.clearTitle();

        sidebarService.clearShortcuts();
        sidebarService.clearItems();

        breadcrumbsService.removeLastBreadcrumb();
    };

    if (stateSettings.translations) {
        stateSettings.state.resolve = stateSettings.state.resolve || {};
        stateSettings.state.resolve.translations = function ($translatePartialLoader, $translate) {
            $translatePartialLoader.addPart(stateSettings.translations);
            return $translate.refresh();
        };
    };

    function setupSidebarShortcuts(sidebarService) {
        sidebarService.setShortcuts([
            {
                titleTranslationId: 'sidebar.shortcuts.statistics',
                buttonClass: 'btn btn-success',
                icon: 'icon-signal',
                click: function () {
                    alert('Going to the statistics page ...');
                }
            },
            {
                titleTranslationId: 'sidebar.shortcuts.edit',
                buttonClass: 'btn btn-info',
                icon: 'icon-pencil',
                click: function () {
                    alert('Going to the edit page ...');
                }
            },
            {
                titleTranslationId: 'sidebar.shortcuts.profile',
                buttonClass: 'btn btn-warning',
                icon: 'icon-group',
                click: function () {
                    alert('Going to the profile page ...');
                }
            },
            {
                titleTranslationId: 'sidebar.shortcuts.administration',
                buttonClass: 'btn btn-danger',
                icon: 'icon-cogs',
                click: function () {
                    alert('Going to the administration page ...');
                }
            }
        ]);
    };

    function setupSidebarItems(sidebarService) {
        sidebarService.setItems([
            {
                key: 'getting-started',
                titleTranslationId: 'sidebar.items.getting-started',
                icon: 'icon-fire',
                state: 'main.getting-started'
            }
            // ======= yeoman sidebar hook =======
            // Note: Do not remove the above hook if you wish the sidebar to remain working
        ]);
    };
})();
