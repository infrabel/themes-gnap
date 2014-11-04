module.exports = {
    build_ace_css: {
        options: {
            browsers: ['> 0%', 'last 2 versions', 'ie 8', 'ie 9', 'Firefox ESR', 'Opera 12.1']
        },
        files: [{
            expand: true,
            cwd: './build/ace/css/develop/',
            src: '**/*.css',
            dest: './build/ace/css/develop/'
        }]
    }
};
