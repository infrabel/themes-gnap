module.exports = {
    gnap_ace_less: {
        files: [
            {
                src: './build/ace/css/less/ace.less',
                dest: './build/ace/css/less/ace.orig.less'
            }
        ]
    },

    gnap_ace_js: {
        files: [
            {
                src: './build/ace/js/jquery-*.min.js',
                dest: './build/ace/js/jquery.min.js'
            },
            {
                src: './build/ace/js/develop/jquery-*.js',
                dest: './build/ace/js/develop/jquery.js'
            },
            {
                src: './build/ace/js/respond.src.min.js',
                dest: './build/ace/js/respond.min.js'
            },
            {
                src: './build/ace/js/develop/respond.src.js',
                dest: './build/ace/js/develop/respond.js'
            }
        ]
    },

    gnap_package: {
        files: [
            {
                src: './deploy/gnap/',
                dest: './deploy/vendor/gnap-theme-gnap/'
            }
        ]
    },

    gnap_release: {
        files: [
            {
                src: './releases/gnap-theme-gnap/gnap.zip',
                dest: './releases/gnap-theme-gnap/gnap-theme-gnap-<%= grunt.task.current.args[0] %>.zip'
            }
        ]
    }
};
