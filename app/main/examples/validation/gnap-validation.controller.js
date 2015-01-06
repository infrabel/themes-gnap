'use strict';

(function () {
    angular
        .module('gnap-example-app')
        .controller('gnap-validation', GnapValidationController);

    GnapValidationController.$inject = ['$q', 'notification'];

    function GnapValidationController($q, notification) {
        var vm = this;

        vm.save = function() {
            notification.show({
                type: 'success',
                title: 'User Saved',
                text: 'The user account was successfully created.'
            });
        };

        vm.validateUsername = function() {
            if (angular.isUndefined(vm.username)) {
                return {
                    unique: true
                };
            }

            var uniqueDeferred = $q.defer();

            // simulate remote call
            setTimeout(function() {
                if (vm.username === 'test') {
                    uniqueDeferred.resolve(false);
                } else {
                    uniqueDeferred.resolve(true);
                }
            }, 2500);

            return {
                unique: uniqueDeferred.promise
            };
        };
    }
})();
