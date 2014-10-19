'use strict';

/**
 * @desc limits the number of characters that can be entered in a textarea
 * @file input-limiter.directive.js
 * @example <textarea gnap-input-limiter="200"></textarea>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapInputLimiter', gnapInputLimiter);

    function gnapInputLimiter() {

        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {
            element.attr('maxlength', attrs['gnapInputLimiter']);

            // create a limiter box
            var limiterBox = $('<span class="limiter-box"></span>');

            // generate and assign a unique ID for the limiter box
            var limiterBoxId = 'limiter-box-' + $('span.limiter-box').length + 1;
            limiterBox.attr('id', limiterBoxId);

            $(element).before(limiterBox);

            $(element).inputlimiter({
                boxId: limiterBoxId,
                boxAttach: false,
                remTextHideOnBlur: false,
                remText: '%n',
                limitTextShow: false
            });
        }
    }
})();
