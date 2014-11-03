'use strict';

/**
 * @desc displays a sidebar
 * @file sidebar.directive.js
 * @example <div gnap-sidebar></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapSidebar', gnapSidebar)
        .animation('.submenu', gnapSidebarSlideUpSlideDown);

    angular
        .module('template/gnap/sidebar/sidebar.html', [])
        .run(gnapSidebarTemplate);

    gnapSidebar.$inject = ['$state', 'sidebarService'];
    gnapSidebarTemplate.$inject = ['$templateCache'];

    function gnapSidebar($state, sidebarService) {

        return {
            restrict: 'A',
            replace: true,
            templateUrl: 'template/gnap/sidebar/sidebar.html',
            link: link
        };

        function link(scope) {
            scope.settings = sidebarService.settings;

            // handles sidebar item selection
            scope.select = function (item) {
                if (item.items) {
                    sidebarService.toggleSubmenu(item);
                }

                if (item.click) {
                    item.click();
                }

                if (item.state) {
                    $state.go(item.state);
                }
            };

            // handles collapsed state of the sidebar
            scope.toggleCollapsed = function () {
                sidebarService.toggleCollapsed();
            };
        }
    }

    // custom animation for ng-hide (slide-up/slide-down)
    function gnapSidebarSlideUpSlideDown() {
        return {
            beforeAddClass: function (element, className, done) {
                if (className === 'ng-hide') {
                    element.slideUp(done);

                    return function (cancel) {
                        if (cancel) {
                            element.stop();
                        }
                    };
                }
            },

            removeClass: function (element, className, done) {
                if (className === 'ng-hide') {
                    element.hide();
                    element.slideDown(done);

                    return function (cancel) {
                        if (cancel) {
                            return element.stop();
                        }
                    };
                }
            }
        };
    }

    function gnapSidebarTemplate($templateCache) {

        /* jshint ignore:start */
        $templateCache.put("template/gnap/sidebar/sidebar.html",
            "<div id=\"sidebar\" class=\"sidebar\" ng-class=\"{\'menu-min\': settings.collapsed, display: settings.visible}\">\n" +
            "\n" +
            "    <div id=\"sidebar-shortcuts\" class=\"sidebar-shortcuts\">\n" +
            "        <div class=\"sidebar-shortcuts-large\" id=\"sidebar-shortcuts-large\">\n" +
            "            <button ng-repeat=\"shortcut in settings.shortcuts\"\n" +
            "                    ng-click=\"shortcut.click()\" \n" +
            "                    class=\"{{ shortcut.buttonClass }}\" \n" +
            "                    tooltip=\"{{ shortcut._title }}\" \n" +
            "                    tooltip-placement=\"bottom\">\n" +
            "                <i class=\"{{ shortcut.icon }}\"><\/i>\n" +
            "            <\/button>\n" +
            "        <\/div>\n" +
            "\n" +
            "        <div class=\"sidebar-shortcuts-mini\" id=\"sidebar-shortcuts-mini\">\n" +
            "            <span ng-repeat=\"shortcut in settings.shortcuts\" class=\"{{ shortcut.buttonClass }}\"><\/span>\n" +
            "        <\/div>\n" +
            "    <\/div> <!-- #sidebar-shortcuts -->\n" +
            "\n" +
            "    <ul class=\"nav nav-list\">\n" +
            "        <li ng-repeat=\'levelOneItem in settings.items\'\n" +
            "            ng-class=\"{open: levelOneItem.open, active: levelOneItem.active}\">\n" +
            "            <a ng-click=\'select(levelOneItem)\'\n" +
            "               ng-class=\"{\'dropdown-toggle\': levelOneItem.items}\">\n" +
            "                <i class=\"{{ levelOneItem.icon }}\"><\/i>\n" +
            "                <span class=\"menu-text\">{{ levelOneItem._title }}<\/span>\n" +
            "                <b class=\"arrow icon-angle-down\" ng-show=\"levelOneItem.items\"><\/b>\n" +
            "            <\/a>\n" +
            "            <ul class=\"submenu\" ng-show=\"levelOneItem.open\">\n" +
            "                <li ng-repeat=\'levelTwoItem in levelOneItem.items\'\n" +
            "                    ng-class=\'{open: levelTwoItem.open, active: levelTwoItem.active}\'>\n" +
            "                    <a ng-click=\'select(levelTwoItem)\'\n" +
            "                       ng-class=\"{\'dropdown-toggle\': levelTwoItem.items}\">\n" +
            "                        <i class=\"{{ levelTwoItem.icon }}\"><\/i>\n" +
            "                        <span class=\"menu-text\">{{ levelTwoItem._title }}<\/span>\n" +
            "                        <b class=\"arrow icon-angle-down\" ng-show=\"levelTwoItem.items\"><\/b>\n" +
            "                    <\/a>\n" +
            "                    <ul class=\"submenu\" ng-show=\"levelTwoItem.open\">\n" +
            "                        <li ng-repeat=\'levelThreeItem in levelTwoItem.items\'\n" +
            "                            ng-class=\"{active: levelThreeItem.active}\">\n" +
            "                            <a ng-click=\'select(levelThreeItem)\'>\n" +
            "                                <i class=\"{{ levelThreeItem.icon }}\"><\/i>\n" +
            "                                <span class=\"menu-text\">{{ levelThreeItem._title }}<\/span>\n" +
            "                            <\/a>\n" +
            "                        <\/li>\n" +
            "                    <\/ul>\n" +
            "                <\/li>\n" +
            "            <\/ul>\n" +
            "        <\/li>\n" +
            "    <\/ul> <!-- .nav .nav-list -->\n" +
            "\n" +
            "    <div class=\"sidebar-collapse\" id=\"sidebar-collapse\" ng-click=\"toggleCollapsed()\">\n" +
            "        <i ng-class=\"{\'icon-double-angle-left\': !settings.collapsed, \'icon-double-angle-right\': settings.collapsed}\"><\/i>\n" +
            "    <\/div>\n" +
            "<\/div>\n" +
            "");
        /* jshint ignore:end */
    }
})();
