angular
  .module('gnap-example-app')
  .directive('sessionDropdown', function () {
    return {
      restrict: 'A',
      templateUrl: 'app/session-dropdown.html'
    };
  });
  