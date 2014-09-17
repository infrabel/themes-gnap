module.exports = {
    gnap_ace_less: {
        files: [
            {
                src: './build/ace/css/less/ace.less',
                dest: './build/ace/css/less/ace.orig.less'
            }
        ]
    },

    gnap_ace_jquery: {
        files: [
            {
                src: './build/ace/js/jquery-*.min.js',
                dest: './build/ace/js/jquery.min.js'
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
