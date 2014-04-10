module.exports = function (grunt) {
    grunt.registerTask('build-jquery',
    [
        'deploy-jquery'
    ]);
    
    grunt.registerTask('deploy-jquery',
    [
        'copy:raw_jquery_to_deploy'
    ]);
};
