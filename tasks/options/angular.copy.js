module.exports = {
    raw_angular_to_deploy: {
        expand: true,
        cwd: './raw/angular/',
        src: ['*.*', '**/*.*', '!*.zip'],
        dest: './deploy/angular/angular/'
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
    },

    raw_angular_local_storage_to_deploy: {
        expand: true,
        cwd: './raw/angular-local-storage/',
        src: ['*.*', '**/*.*', '!*.zip'],
        dest: './deploy/angular/angular-local-storage/'
    },

    raw_angular_ui_router_to_deploy: {
        expand: true,
        cwd: './raw/ui-router/',
        src: ['*.*', '**/*.*', '!*.zip'],
        dest: './deploy/angular/ui-router/'
    },

    raw_angular_translate_to_deploy: {
        expand: true,
        cwd: './raw/angular-translate/',
        src: ['*.*', '**/*.*', '!*.zip'],
        dest: './deploy/angular/angular-translate/'
    },

    raw_angular_dynamic_locale_to_deploy: {
        expand: true,
        cwd: './raw/angular-dynamic-locale/',
        src: ['*.*', '**/*.*', '!*.zip'],
        dest: './deploy/angular/angular-dynamic-locale/'
    }
};
