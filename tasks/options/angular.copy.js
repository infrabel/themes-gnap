module.exports = {
    raw_angular_to_deploy: {
        expand: true,
        cwd: './raw/angular/',
        src: ['*.*', '**/*.*', '!*.zip'],
        dest: './deploy/angular/'
    },

    raw_angular_chosen_to_deploy: {
        expand: true,
        cwd: './raw/localytics-chosen/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/angular/localytics-chosen/'
    },

    raw_angular_bootbox_to_deploy: {
        expand: true,
        cwd: './raw/ng-bootbox/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/angular/ng-bootbox/'
    },

    raw_angular_bootstrap_to_deploy: {
        expand: true,
        cwd: './raw/ui-bootstrap/',
        src: ['*.*', '**/*.*'],
        dest: './deploy/angular/ui-bootstrap/'
    },

    raw_angular_datatables_to_deploy: {
        expand: true,
        cwd: './raw/angular-datatables/',
        src: ['*.*', '**/*.*', '!*.zip'],
        dest: './deploy/angular/angular-datatables/'
    }
};
