module.exports = {
    build_ace_js: {
        options: {
            sourceMap: true,
            sourceMapName: function (src) {
                var folder = src.substring(0, src.lastIndexOf('/./'));
                var filename = src.substring(src.lastIndexOf('/./'), src.length);

                filename = filename.substring(0, filename.lastIndexOf('.'));

                return folder + '/debug' + filename + '.map';
            }
        },
        files: [{
            expand: true,
            flatten: false,
            cwd: './build/ace/js/develop/',
            src: ['./*.js', './**/*.js', '!./*.min.js', '!./**/*.min.js'],
            dest: './build/ace/js/',
            rename: function (dest, src) {
                var folder = src.substring(0, src.lastIndexOf('/'));
                var filename = src.substring(src.lastIndexOf('/'), src.length);

                filename = filename.substring(0, filename.lastIndexOf('.'));

                return dest + folder + filename + '.min.js';
            }
        }]
    }
};
