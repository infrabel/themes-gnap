'use strict';

/**
 * @desc service for interacting with the sidebar
 * @file sidebar.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('sidebarService', sidebarService);

    sidebarService.$inject = ['$translate', 'localStorageService'];

    function sidebarService($translate, localStorageService) {

        var settings = {
            items: [],
            shortcuts: [],
            visible: false,
            collapsed: localStorageService.get('sidebar-collapsed') === 'true'
        };

        return {
            settings: settings,
            setItems: setItems,
            setShortcuts: setShortcuts,
            clearItems: clearItems,
            clearShortcuts: clearShortcuts,
            setSelected: setSelected,
            clearSelected: clearSelected,
            toggleMenu: toggleMenu,
            toggleCollapsed: toggleCollapsed,
            toggleSubmenu: toggleSubmenu
        };

        function setItems(value) {
            resolveTranslations(value);
            settings.items = value;
        }

        function setShortcuts(value) {
            resolveTranslations(value);
            settings.shortcuts = value;
        }

        function clearItems() {
            settings.items = [];
        }

        function clearShortcuts() {
            settings.shortcuts = [];
        }

        function toggleMenu() {
            settings.visible = !settings.visible;
        }

        function toggleCollapsed() {
            settings.collapsed = !settings.collapsed;
            localStorageService.set('sidebar-collapsed', settings.collapsed);
        }

        function toggleSubmenu(parent) {
            var currentOpenState = parent.open;

            collapseSameLevelSubmenus(parent);

            parent.open = !currentOpenState;
        }

        function collapseSameLevelSubmenus(item) {
            var siblings = findSiblings(item);

            for (var siblingIndex = 0; siblingIndex < siblings.length; siblingIndex++) {
                siblings[siblingIndex].open = false;
            }
        }

        function findSiblings(item) {
            if (isRootMenuItem(item)) {
                return settings.items;
            }

            // discover the parent of an item, since we have no .parent link
            var parent = (function findParent(parents, child) {
                for (var parentIndex = 0; parentIndex < parents.length; parentIndex++) {
                    var candidateParent = parents[parentIndex];

                    if (hasChild(candidateParent, child)) {
                        return candidateParent;
                    }

                    if (candidateParent.items) {
                        candidateParent = findParent(candidateParent.items, child);

                        if (candidateParent) {
                            return candidateParent;
                        }
                    }
                }

                return null;
            }(settings.items, item));

            if (parent) {
                return parent.items;
            }

            return [];
        }

        function hasChild(parent, child) {
            if (!parent.items) {
                return false;
            }

            for (var childIndex = 0; childIndex < parent.items.length; childIndex++) {
                if (parent.items[childIndex].key === child.key) {
                    return true;
                }
            }
            return false;
        }

        function isRootMenuItem(item) {
            for (var rootItemIndex = 0; rootItemIndex < settings.items.length; rootItemIndex++) {
                if (settings.items[rootItemIndex].key === item.key) {
                    return true;
                }
            }
            return false;
        }

        function setSelected(path) {
            // parse the path into an array
            /* jshint laxbreak:true */
            var parsedPath = path == null
                                ? []
                                : ((path instanceof Array)
                                    ? path
                                    : path.split('/'));
            /* jshint laxbreak:false */

            // find the item to set as active
            updateActiveState(settings.items, parsedPath);

            function updateActiveState(itemList, pathSegments) {

                for (var itemIndex = 0; itemIndex < itemList.length; itemIndex++) {
                    var item = itemList[itemIndex];

                    item.active = false;
                    item.open = false;

                    if (item.key === pathSegments[0]) {

                        if (pathSegments.length === 1) {
                            // last item in the path segments
                            item.active = true;
                        } else if (item.items) {
                            item.open = true;
                        }
                    }

                    if (item.items) {
                        // item has subitems
                        updateActiveState(item.items, pathSegments.splice(1));
                    }
                }
            }
        }

        function clearSelected() {
            setSelected(null);
        }

        function resolveTranslations(items) {
            for (var itemIndex = 0; itemIndex < items.length; itemIndex++) {
                var item = items[itemIndex];
                if (item.titleTranslationId) {
                    (function (translatable) {
                        $translate(translatable.titleTranslationId).then(function (translation) {
                            translatable._title = translation || translatable.title;
                        });
                    })(item);
                } else {
                    item._title = item.title;
                }

                if (item.items) {
                    resolveTranslations(item.items);
                }
            }
        }
    }
})();
