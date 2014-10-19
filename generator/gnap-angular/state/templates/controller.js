'use strict';

(function () {
    angular
        .module('<%= appName %>')
        .controller('<%= stateNameCapitalized %>Controller', <%= stateNameCapitalized %>Controller);

    <%= stateNameCapitalized %>Controller.$inject = [];

    function <%= stateNameCapitalized %>Controller() {
    }
})();
