module.exports = {
    'gnap-angular_package': {
        files: [
            {
                src: './deploy/gnap-angular/',
                dest: './deploy/vendor/gnap-theme-gnap-angular/'
            }
        ]
    },

    'gnap-angular_release': {
        files: [
            {
                src: './releases/GNaP.Themes.Web.GNaP.Angular/gnap-angular.zip',
                dest: './releases/GNaP.Themes.Web.GNaP.Angular/GNaP.Themes.Web.GNaP.Angular.<%= grunt.task.current.args[0] %>.zip',
            }
        ]
    }
};
