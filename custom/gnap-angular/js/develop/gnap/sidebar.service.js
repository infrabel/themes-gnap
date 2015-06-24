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
            // Upon selecting a new path, clear the previous one
            clearSelected();

            // parse the path into an array
            /* jshint laxbreak:true */
            var parsedPath = dotSeparatedPathToArray(path);
            /* jshint laxbreak:false */

            // Find the item to set as active.
            // Start at 1, because we always skip 'main'.
            updateActiveState(settings.items, 1);

            function updateActiveState(menuEntries, level) {
                for (var itemIndex = 0; itemIndex < menuEntries.length; itemIndex++) {
                    var menuEntry = menuEntries[itemIndex];
                    var menuPath = dotSeparatedPathToArray(menuEntry.key);

                    if (menuPath[level] === parsedPath[level]) {
                        if (parsedPath.length > level + 1 && menuEntry.items) {
                            // We're on the correct path, but the active path is deeper and we got child items
                            menuEntry.open = true;

                            // Keep looking a level deeper
                            updateActiveState(menuEntry.items, level + 1);
                        } else {
                            // This is actually the active item in the path
                            menuEntry.active = true;
                            return;
                        }
                    }
                }
            }
        }

        function dotSeparatedPathToArray(path) {
            return path == null ? [] : ((path instanceof Array) ? path : path.split('.'));
        }

        function clearSelected(items) {
            if (!items && settings.items) {
                // Top-level
                clearSelected(settings.items);
            } else {
                // Iterate over the passed items, and set them as both inactive and closed
                for (var itemIndex = 0; itemIndex < items.length; itemIndex++) {
                    var menuEntry = items[itemIndex];

                    menuEntry.active = false;
                    menuEntry.open = false;

                    // In case the menu item has sub items, do the same for them recursively
                    if (menuEntry.items) {
                        clearSelected(menuEntry.items);
                    }
                }
            }
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
