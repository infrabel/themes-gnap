/**
 * @desc service for interacting with the sidebar
 * @file sidebar.service.js
 */
(function () {
    angular
        .module('gnap')
        .factory('sidebarService', sidebarService);

    function sidebarService() {
        var shortcuts = [];
        var items = [];

        function setShortcuts(value) {
            shortcuts = value;
        };

        function getShortcuts() {
            return shortcuts;
        };

        function setItems(value) {
            items = value;
        };

        function getItems() {
            return items;
        };

        function setActive(path) {
            // parse the path into an array
            var parsedPath = (path instanceof Array) ? path : path.split('/');

            // find the item to set as active
            updateActiveState(items, parsedPath);

            function updateActiveState(itemList, path) {

                for (var itemIndex = 0; itemIndex < itemList.length; itemIndex++) {

                    var item = itemList[itemIndex];

                    item.active = false;

                    if (item.key == path[0]) {

                        if (path.length == 1) {
                            // last item in the path
                            item.active = true;
                        } else {
                            if (item.items) {
                                item.open = true;
                            }
                        }
                    }

                    if (item.items) {
                        // item has subitems
                        updateActiveState(item.items, path.splice(1));
                    }
                }
            }
        };

        return {
            setShortcuts: setShortcuts,
            getShortcuts: getShortcuts,
            setItems: setItems,
            getItems: getItems,
            setActive: setActive
        }
    }
})();