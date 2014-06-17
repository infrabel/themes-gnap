module.exports = function (grunt) {
    grunt.registerTask('build-sample', 'Builds Sample theme', function () {
        grunt.task.run(['init-bootstrap',
                        'prepare-build-bootstrap',
                        'prepare-build-flatly',
                        'customize-flatly',
                        'rename:sample_bootstrap_less',
                        'copy:sample_build_flatly_to_build_bootstrap',
                        'copy:sample_build_bootstrap_flatly_to_build_bootstrap',
                        'compile-bootstrap',
                        'deploy-bootstrap',
                        'deploy-flatly',
                        'rename:sample_flatly_license',
                        'build-jquery',
                        'copy:sample_deploy_flatly',
                        'copy:sample_deploy_bootstrap',
                        'copy:sample_deploy_jquery',
                        'clean:sample_deploy']);
    });

    grunt.registerTask('package-test-sample', 'Builds Sample theme test NuGet package', function () {
        grunt.task.run(['semver:sample:bump:patch',
                        'package-sample']);
    });

    grunt.registerTask('package-release-sample', 'Builds Sample theme NuGet package', function () {
        grunt.task.run(['semver:sample:bump:minor',
                        'package-sample']);
    });

    grunt.registerTask('package-sample', 'Builds Sample theme NuGet package', function () {
        var version = grunt.file.readJSON('./versions/sample.json').version;
        grunt.config.set('nugetpack.sample.options.version', version);

        grunt.task.run(['mkdir:sample_nuget',
                        'nugetpack:sample']);
    });
};
