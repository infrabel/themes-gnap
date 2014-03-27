module.exports = function (grunt) {
    grunt.registerTask('build-bootstrap',
    [
        'init-bootstrap',
        'prepare-build-bootstrap',
        'compile-bootstrap',
        'deploy-bootstrap'
    ]);

    grunt.registerTask('init-bootstrap', 'Sets up Bootstrap NPM modules', function () {
        // Only need to init bootstrap if it hasn't been done before
        if (!grunt.file.exists('./raw/bootstrap/node_modules'))
            grunt.task.run('exec:init_bootstrap');
    });

    grunt.registerTask('prepare-build-bootstrap',
    [
        'copy:raw_bootstrap_to_build',
        'task-wildcard-target:replace:bootstrap'
    ]);

    grunt.registerTask('compile-bootstrap',
    [
        'exec:grunt_bootstrap'
    ]);

    grunt.registerTask('deploy-bootstrap',
    [
        'copy:build_bootstrap_to_deploy'
    ]);
};
