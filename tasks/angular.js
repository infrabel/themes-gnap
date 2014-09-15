module.exports = function (grunt) {
    grunt.registerTask('build-angular',
    [
        'deploy-angular'
    ]);
    
    grunt.registerTask('deploy-angular',
    [
        'copy:raw_angular_to_deploy',
        'copy:raw_angular_chosen_to_deploy',
        'copy:raw_angular_bootbox_to_deploy',
        'copy:raw_angular_bootstrap_to_deploy',
        'copy:raw_angular_datatables_to_deploy',
        'copy:raw_angular_local_storage_to_deploy',
        'copy:raw_angular_ui_router_to_deploy',
        'copy:raw_angular_translate_to_deploy'
    ]);
};
