'use strict';

/**
 * @desc header checkbox directive that checks/unchecks row checkboxes based on it's state
 * @file header-checkbox.directive.js
 * @example <th><td><input type="checkbox" gnap-header-checkbox /></td></th>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapHeaderCheckbox', gnapHeaderCheckbox);

    function gnapHeaderCheckbox() {

        return {
            restrict: 'AE',
            link: link
        };

        function link(scope, element) {

            var columnIndex = getCheckboxColumnIndex(element);

            // when the user clicks the header checkbox then the checkboxes
            // in the rows should be checked/unchecked based on the checked
            // state of the header checkbox
            handleHeaderCheckboxClicks(element, columnIndex);

            // when all checkboxes in a row have the same checked state
            // the header checkbox should be updated to those checked states
            handleRowCheckboxClicks(element, columnIndex);
        }

        function handleHeaderCheckboxClicks(element) {

            element.click(function () {

                // update the checked property of all checkboxes
                element.closest('table')
                       .find('tr input[type=checkbox]')
                       //.find('tr td:eq(' + columnIndex + ') input[type=checkbox]')
                       .prop('checked', element.is(':checked'));
            });
        }

        function handleRowCheckboxClicks(element) {

            // find all checkboxes (only in td)
            var rowCheckboxes = element.closest('table')
                                       .find('tr td input[type=checkbox]');

            // when one of the checkboxes is clicked the header checkbox
            // must be updated
            rowCheckboxes.click(function () {

                // are all checkboxes checked?
                var allChecked = rowCheckboxes.not(':checked')
                                              .length === 0;

                element.prop('checked', allChecked);
            });
        }

        function getCheckboxColumnIndex(element) {
            return element.closest('th')
                          .prevAll()
                          .length;
        }
    }
})();
