module.exports = {
    raw_bootstrap_to_build: {
        expand: true,
        cwd: './raw/bootstrap/',
        src: ['*.*', '**/*.*'],
        dest: './build/bootstrap/'
    },

    build_bootstrap_to_deploy: {
        expand: true,
        cwd: './build/bootstrap/dist/',
        src: ['*.min.*', '**/*.min.*', 'fonts/*'],
        dest: './deploy/bootstrap/'
    },
}