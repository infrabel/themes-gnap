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
                src: './releases/GNaP.Themes.Web.GNaP/gnap.zip',
                dest: './releases/GNaP.Themes.Web.GNaP/GNaP.Themes.Web.GNaP.<%= grunt.task.current.args[0] %>.zip',
            }
        ]
    }
};
