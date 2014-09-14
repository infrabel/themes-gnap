module.exports = {
    raw_ace_html_to_build: {
        expand: true,
        cwd: './raw/ace/mustache/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/html/'
    },

    raw_ace_css_to_build: {
        expand: true,
        cwd: './raw/ace/assets/css/',
        src: ['*.less', '**/*.less', '*.css', '**/*.css'],
        dest: './build/ace/css/'
    },

    raw_ace_js_to_build: {
        expand: true,
        cwd: './raw/ace/assets/js/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/js/'
    },

    fix_raw_ace_js_fuelux: {
        expand: true,
        cwd: './raw/ace/assets/js/fuelux/data/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/js/uncompressed/fuelux/data/'
    },

    raw_ace_fonts_to_build: {
        expand: true,
        cwd: './raw/ace/assets/font/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/fonts/'
    },

    raw_ace_images1_to_build: {
        expand: true,
        cwd: './raw/ace/assets/images/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/images/'
    },

    raw_ace_images2_to_build: {
        expand: true,
        cwd: './raw/ace/assets/img/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/images/'
    },

    raw_ace_images3_to_build: {
        expand: true,
        cwd: './raw/ace/assets/css/img/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/images/'
    },

    raw_ace_images4_to_build: {
        expand: true,
        cwd: './raw/ace/assets/css/images/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/images/'
    },

    raw_ace_images5_to_build: {
        expand: true,
        cwd: './raw/ace/assets/css/',
        src: ['*.png', '*.gif'],
        dest: './build/ace/images/'
    },

    build_ace_css_to_build_ace_css_develop: {
        expand: true,
        cwd: './build/ace/css/',
        src: ['*.css'],
        dest: './build/ace/css/develop/'
    },

    build_ace_js_to_build_ace_js_develop: {
        expand: true,
        cwd: './build/ace/js/',
        src: ['*.js', '!*min.js'],
        dest: './build/ace/js/develop/'
    },

    custom_ace_html_to_build: {
        expand: true,
        cwd: './custom/ace/html/app/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/html/app/'
    },

    custom_ace_mustache_to_build: {
        expand: true,
        cwd: './custom/ace/html/js/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/html/js/'
    },

    custom_ace_css_to_build: {
        expand: true,
        cwd: './custom/ace/css/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/css/'
    },

    custom_ace_js_to_build: {
        expand: true,
        cwd: './custom/ace/js/',
        src: ['*.*', '**/*.*'],
        dest: './build/ace/js/'
    },

    custom_ace_license_to_build: {
        expand: true,
        cwd: './custom/ace/',
        src: ['LICENSE-Ace'],
        dest: './build/ace/'
    },

    build_ace_html_to_deploy: {
        expand: true,
        cwd: './build/ace/html/js/output_folder/',
        src: ['*.html', '**/*.html'],
        dest: './deploy/ace/'
    },
    
    build_ace_css_to_deploy: {
        expand: true,
        cwd: './build/ace/css/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/ace/css/'
    },

    build_ace_fonts_to_deploy: {
        expand: true,
        cwd: './build/ace/fonts/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/ace/fonts/'
    },

    build_ace_images_to_deploy: {
        expand: true,
        cwd: './build/ace/images/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/ace/images/'
    },

    build_ace_js_to_deploy: {
        expand: true,
        cwd: './build/ace/js/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/ace/js/'
    },

    build_ace_license_to_deploy: {
        expand: true,
        cwd: './build/ace/',
        src: ['LICENSE-Ace'],
        dest: './deploy/ace/'
    }
};
