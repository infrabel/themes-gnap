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
    }

    //combine_vender_css: {
    //    files: {
    //        './build/ace/css/vendor.css': [
    //            './build/ace/css/develop/*.css',
    //            '!./build/ace/css/develop/ace*.css',
    //            '!./build/ace/css/develop/ie8.css',
    //            '!./build/ace/css/develop/font-awesome-ie7.css'
    //        ]
    //    }
    //}
};
