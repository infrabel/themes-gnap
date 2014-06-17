module.exports = {
    gnap_custom_images_to_build_ace: {
        expand: true,
        cwd: './custom/gnap/images/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/images/'
    },

    gnap_custom_css_to_build_ace: {
        expand: true,
        cwd: './custom/gnap/css/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/css/less/theme/'
    },

    gnap_deploy_ace: {
        expand: true,
        cwd: './deploy/ace/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/gnap/'
    },

    gnap_jquery_to_build_ace: {
        expand: true,
        cwd: './deploy/jquery/',
        src: ['*.js', '!*.min.js', '!*.min.map'],
        dest: './build/ace/js/develop/'
    }
};
