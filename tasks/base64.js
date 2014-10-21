module.exports = function (grunt) {
    grunt.registerTask('build-base64',
    [
        'deploy-base64'
    ]);
    
    grunt.registerTask('deploy-base64',
    [
        'copy:raw_base64_to_deploy'
    ]);
};
