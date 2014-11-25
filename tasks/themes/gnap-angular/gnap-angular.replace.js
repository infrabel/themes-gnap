module.exports = {
    'gnap-angular_map': {
        src: ['./build/gnap-angular/js/debug/*.map', './build/gnap-angular/js/debug/**/*.map'],
        overwrite: true,
        replacements: [
            {
                from: '..\\\\develop\\\\',
                to: 'develop\\\\'
            }
        ]
    },

    'gnap-angular_packagejson': {
        src: ['./deploy/vendor/gnap-theme-gnap-angular/package.json'],
        overwrite: true,
        replacements: [
            {
                from: '0.0.0',
                to: '<%= grunt.task.current.args[0] %>'
            }
        ]     
    }
};
