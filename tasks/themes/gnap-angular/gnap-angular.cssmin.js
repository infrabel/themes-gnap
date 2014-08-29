module.exports = {
    build_gnap_angular_css: {
        expand: true,
        cwd: './build/gnap-angular/css/develop/',
        src: ['*.css', '!*.min.css', '**/*.css', '!**/*.min.css'],
        dest: './build/gnap-angular/css/',
        rename: function (dest, src) {
            var folder = src.substring(0, src.lastIndexOf('/'));
            var filename = src.substring(src.lastIndexOf('/'), src.length);

            filename = filename.substring(0, filename.lastIndexOf('.'));

            return dest + folder + filename + '.min.css';
        }
    }
};
