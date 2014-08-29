module.exports = function (grunt) {
    grunt.registerTask('build-gnap-angular', 'Builds GNaP theme Angular additions', function () {
        grunt.task.run(['build-gnap',
                        'build-angular',
                        'clean:gnap-angular_build',
                        'copy:gnap-angular_angular_js_to_build',
                        'copy:gnap-angular_angular_css_to_build',
                        'copy:gnap-angular_angular_images_to_build',
                        'copy:gnap-angular_custom_to_build',
                        'includereplace:gnap-angular_replace_examples',
                        'cssmin:build_gnap_angular_css',
                        'uglify:gnap-angular',
                        'replace:gnap-angular_map',
                        'imagemin:gnap_images_png',
                        'imagemin:gnap_images_jpg',
                        'imagemin:gnap_images_gif',
                        'copy:gnap-angular_deploy_gnap',
                        'copy:gnap-angular_deploy',
                        'copy:gnap-angular_deploy_gnap_directives',
                        'clean:gnap-angular_deploy'
        ]);
    });
    
    grunt.registerTask('package-test-gnap-angular', 'Builds GNaP theme Angular additions test NuGet package', function () {
        grunt.task.run(['semver:gnap-angular:bump:patch',
                        'package-gnap-angular']);
    });

    grunt.registerTask('package-release-gnap-angular', 'Builds GNaP theme Angular additions NuGet package', function () {
        grunt.task.run(['semver:gnap-angular:bump:minor',
                        'package-gnap-angular']);
    });

    grunt.registerTask('package-gnap-angular', 'Builds GNaP theme Angular additions NuGet package', function () {
        var version = grunt.file.readJSON('./versions/gnap-angular.json').version;
        grunt.config.set('nugetpack.gnap-angular.options.version', version);

        grunt.task.run(['mkdir:gnap-angular_nuget',
                        'nugetpack:gnap-angular']);
    });
};
