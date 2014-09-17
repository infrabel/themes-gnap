module.exports = function (grunt) {
    grunt.registerTask('build-select2',
    [
        'deploy-select2'
    ]);
    
    grunt.registerTask('deploy-select2',
    [
        'copy:raw_select2_to_deploy'
    ]);
};
