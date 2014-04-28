module.exports = function (grunt) {
    grunt.registerTask('build-flatly',
    [
        'prepare-build-flatly',
        'customize-flatly',
        'deploy-flatly'
    ]);

    grunt.registerTask('prepare-build-flatly',
    [
        'copy:raw_flatly_to_build'
    ]);

    grunt.registerTask('customize-flatly',
    [
        'copy:custom_flatly_to_build',
        'task-wildcard-target:replace:flatly'
    ]);

    grunt.registerTask('deploy-flatly',
    [
        'copy:build_flatly_to_deploy'
    ]);
};
