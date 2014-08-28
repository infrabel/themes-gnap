module.exports = function (grunt) {
    grunt.registerTask('build-highlight',
    [
        'deploy-highlight'
    ]);
    
    grunt.registerTask('deploy-highlight',
    [
        'copy:raw_highlight_to_deploy'
    ]);
};
