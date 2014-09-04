/**
 * @desc allows for lists to be paged
 * @file pager.directive.js
 * @example <div gnap-pager max-size="5" total-items="totalItems" current-page="currentPage"></div>
 */
(function () {
  angular
    .module('gnap')
    .directive('gnapPager', gnapPager);


  function gnapPager () {
    return {
        restrict: 'AE',
        scope: {
          totalItems: '=',
          currentPage: '=',
          maxSize: '='
        },
        template: '<div pagination max-size="maxSize" boundary-links="true" previous-text="&lsaquo;" ng-model="currentPage" total-items="totalItems" next-text="&rsaquo;" first-text="&laquo;" last-text="&raquo;"></div>'
      };
  }


})();