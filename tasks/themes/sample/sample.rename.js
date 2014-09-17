module.exports = {
    sample_bootstrap_less: {
        files: [
            {
                src: './build/bootstrap/less/bootstrap.less',
                dest: './build/bootstrap/less/bootstrap.orig.less'
            }
        ]
    },

    sample_flatly_license: {
        files: [
            {
                src: './deploy/flatly/LICENSE',
                dest: './deploy/flatly/LICENSE-Flatly'
            }
        ]
    },

    sample_package: {
        files: [
            {
                src: './deploy/sample/',
                dest: './deploy/vendor/gnap-theme-sample/'
            }
        ]
    },

    sample_release: {
        files: [
            {
                src: './releases/GNaP.Themes.Web.Sample/sample.zip',
                dest: './releases/GNaP.Themes.Web.Sample/GNaP.Themes.Web.Sample.<%= grunt.task.current.args[0] %>.zip',
            }
        ]
    }
};
