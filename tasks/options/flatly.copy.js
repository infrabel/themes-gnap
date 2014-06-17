module.exports = {
    raw_flatly_to_build: {
        expand: true,
        cwd: './raw/flatly/',
        src: ['LICENSE', '*.*', '**/*.*'],
        dest: './build/flatly/'
    },

    custom_flatly_to_build: {
        expand: true,
        cwd: './custom/flatly/',
        src: ['*.*', '**/*.*'],
        dest: './build/flatly/'
    },

    build_flatly_to_deploy: {
        expand: true,
        cwd: './build/flatly/',
        src: ['LICENSE', '*.html'],
        dest: './deploy/flatly/'
    },
};
