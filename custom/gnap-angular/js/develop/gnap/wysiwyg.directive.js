'use strict';

/**
 * @desc a WYSIWYG editor
 * @file wysiwyg.directive.js
 * @example <div gnap-wysiwyg></div>
 */
(function () {
    angular
        .module('gnap')
        .directive('gnapWysiwyg', gnapWysiwyg);

    function gnapWysiwyg() {

        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs) {
            element.addClass('wysiwyg-editor');

            function showErrorAlert(reason, detail) {
                var msg = '';

                if (reason === 'unsupported-file-type') {
                    msg = 'Unsupported format ' + detail;
                } else {
                    console.log('error uploading file', reason, detail);
                }

                $('<div class="alert"><button type="button" class="close" data-dismiss="alert">&times;</button>' +
                    '<strong>File upload error</strong>' + msg + '</div>').prependTo('#alerts');
            }

            function supportsContentEditable() {
                //"contentEditable" in document.documentElement returns true in android 2
                var hasContentEditable = ('contentEditable' in document.documentElement);

                if (hasContentEditable) {
                    var ua = navigator.userAgent;
                    var match = ua.match(/Android\s([0-9\.]*)/);
                    if (!match) {
                        return true;
                    }

                    return (parseInt(match[1], 10) >= 4);
                }

                return false;
            }

            if (supportsContentEditable()) {
                /* jshint camelcase:false */
                element.ace_wysiwyg({
                    'wysiwyg': { fileUploadError: showErrorAlert }
                }).prev().addClass('wysiwyg-style1');
            } else {
                element.text('WSYWIG Feature not supported');
            }
        }
    }
})();
