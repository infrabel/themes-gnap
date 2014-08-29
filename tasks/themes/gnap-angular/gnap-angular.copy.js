module.exports = {
    'gnap-angular_angular_js_to_build': {
        expand: true,
        cwd: './deploy/angular/',
        src: ['*.js', '!*.min.js', '!*.min.map',
              '**/*.js', '!**/*.min.js', '!**/*.min.map',
              '!docs/*.*', '!docs/**/*.*'],
        dest: './build/gnap-angular/js/develop/'
    },

    'gnap-angular_angular_css_to_build': {
        expand: true,
        cwd: './deploy/angular/',
        src: ['localytics-chosen/*.css'],
        dest: './build/gnap-angular/css/develop/'
    },

    'gnap-angular_angular_images_to_build': {
        expand: true,
        cwd: './deploy/angular/',
        src: ['localytics-chosen/*.gif'],
        dest: './build/gnap-angular/images/'
    },

    'gnap-angular_custom_to_build': {
        expand: true,
        cwd: './custom/gnap-angular/',
        src: ['*.*', '**/*.*'],
        dest: './build/gnap-angular/'
    },

    'gnap-angular_deploy_gnap': {
        expand: true,
        cwd: './deploy/gnap/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/gnap-angular/'
    },

    'gnap-angular_deploy': {
        expand: true,
        cwd: './build/gnap-angular/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/gnap-angular/'
    }
};
