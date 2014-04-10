module.exports = {
    gnap_build_flatly_to_build_bootstrap: {
        expand: true,
        cwd: './build/flatly/',
        src: ['*.*', '**/*.*'],
        dest: './build/bootstrap/less/flatly/'
    },
    gnap_build_bootstrap_flatly_to_build_bootstrap: {
        expand: true,
        cwd: './build/bootstrap/less/flatly/',
        src: ['bootstrap.less'],
        dest: './build/bootstrap/less/'
    },
    gnap_deploy_flatly: {
        expand: true,
        cwd: './deploy/flatly/',
        src: ['LICENSE-Flatly', '*.*', '**/*.*'],
        dest: './deploy/gnap/'
    },
    gnap_deploy_bootstrap: {
        expand: true,
        cwd: './deploy/bootstrap/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/gnap/'
    },
    gnap_deploy_jquery: {
        expand: true,
        cwd: './deploy/jquery/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/gnap/js/'
    },
};
