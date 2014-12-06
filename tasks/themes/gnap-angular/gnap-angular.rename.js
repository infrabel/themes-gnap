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
                src: './releases/gnap-theme-gnap-angular/gnap-angular.zip',
                dest: './releases/gnap-theme-gnap-angular/gnap-theme-gnap-angular-<%= grunt.task.current.args[0] %>.zip',
            }
        ]
    }
};
