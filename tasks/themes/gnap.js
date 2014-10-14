module.exports = function (grunt) {
    grunt.registerTask('build-gnap', 'Builds GNaP theme', function () {
        grunt.task.run(['build-jquery',
                        'build-select2',
                        'build-highlight',
                        'prepare-build-ace',
                        'rename:gnap_ace_less',
                        'customize-ace',
                        'copy:gnap_jquery_to_build_ace',
                        'copy:gnap_select2js_to_build_ace',
                        'copy:gnap_select2css_to_build_ace',
                        'copy:gnap_select2images_to_build_ace',
                        'clean:gnap_ace_select2',
                        'task-wildcard-target:replace:select2',
                        'copy:gnap_highlightjs_to_build_ace',
                        'copy:gnap_highlightcss_to_build_ace',
                        'copy:gnap_custom_css_to_build_ace',
                        'copy:gnap_custom_images_to_build_ace',
                        'copy:gnap_custom_html_to_build_ace',
                        'compile-ace',
                        'imagemin:gnap_images_png',
                        'imagemin:gnap_images_jpg',
                        'imagemin:gnap_images_gif',
                        'rename:gnap_ace_js',
                        'replace:gnap_develop',
                        'deploy-ace',
                        'copy:gnap_deploy_ace',
                        'clean:gnap_deploy'
        ]);
    });

    grunt.registerTask('package-test-gnap', 'Builds GNaP theme test NuGet package', function () {
        grunt.task.run(['semver:gnap:bump:patch',
                        'package-gnap']);
    });

    grunt.registerTask('package-release-gnap', 'Builds GNaP theme NuGet package', function () {
        grunt.task.run(['semver:gnap:bump:minor',
                        'package-gnap']);
    });

    grunt.registerTask('package-gnap', 'Builds GNaP theme NuGet package', function () {
        var version = grunt.file.readJSON('./versions/gnap.json').version;
        grunt.config.set('nugetpack.gnap.options.version', version);

        grunt.task.run(['mkdir:gnap_nuget',
                        'rename:gnap_package',
                        'compress:gnap',
                        'rename:gnap_release:' + version,
                        'nugetpack:gnap',
                        'copy:gnap_packagejson',
                        'copy:gnap_readme',
                        'replace:gnap_packagejson:' + version,
                        'publish:gnap_publish']);
    });
};
