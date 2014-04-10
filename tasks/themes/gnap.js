module.exports = function (grunt) {
    grunt.registerTask('build-gnap', 'Builds GNaP theme', function () {
        grunt.task.run(['init-bootstrap',
                        'prepare-build-bootstrap',
                        'prepare-build-flatly',
                        'customize-flatly',
                        'rename:gnap_bootstrap_less',
                        'copy:gnap_build_flatly_to_build_bootstrap',
                        'copy:gnap_build_bootstrap_flatly_to_build_bootstrap',
                        'compile-bootstrap',
                        'deploy-bootstrap',
                        'deploy-flatly',
                        'rename:gnap_flatly_license',
                        'build-jquery',
                        'copy:gnap_deploy_flatly',
                        'copy:gnap_deploy_bootstrap',
                        'copy:gnap_deploy_jquery',
                        'clean:gnap_deploy']);
    });

    grunt.registerTask('package-test-gnap', 'Builds GNaP theme test NuGet package', function () {
        grunt.task.run(['semver:gnap:bump:prerelease']);
    });

    grunt.registerTask('package-release-gnap', 'Builds GNaP theme NuGet package', function () {
        grunt.task.run(['semver:gnap:bump:minor']);
    });
};
