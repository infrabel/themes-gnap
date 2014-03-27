module.exports = {
    raw_jquery_to_deploy: {
        expand: true,
        cwd: './raw/jquery/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/jquery/'
    }
}