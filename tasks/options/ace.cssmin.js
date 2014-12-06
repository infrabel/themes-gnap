module.exports = {
    build_ace_css: {
        expand: true,
        cwd: './build/ace/css/develop/',
        src: ['*.css', '!*.min.css'],
        dest: './build/ace/css/',
        rename: function (dest, src) {
            var folder = src.substring(0, src.lastIndexOf('/'));
            var filename = src.substring(src.lastIndexOf('/'), src.length);

            filename = filename.substring(0, filename.lastIndexOf('.'));

            return dest + folder + filename + '.min.css';
        }
    },

    build_ace_css_highlight: {
        expand: true,
        cwd: './build/ace/css/develop/highlight/',
        src: ['*.css', '!*.min.css'],
        dest: './build/ace/css/highlight/',
        rename: function (dest, src) {
            var folder = src.substring(0, src.lastIndexOf('/'));
            var filename = src.substring(src.lastIndexOf('/'), src.length);

            filename = filename.substring(0, filename.lastIndexOf('.'));

            return dest + folder + filename + '.min.css';
        }
    }
};
