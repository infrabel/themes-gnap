module.exports = {
    build_ace_html: {
        options: {
            removeComments: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,

            minifyJS: true,
            minifyCSS: true
        },
        files: [{
            expand: true,
            flatten: false,
            cwd: './build/ace/html/js/output_folder/',
            src: ['./*.html'],
            dest: './build/ace/html/js/output_folder/'
        }]
    }
};
