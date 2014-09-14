module.exports = function (grunt) {
    grunt.registerTask('build-ace',
    [
        'prepare-build-ace',
        'customize-ace',
        'compile-ace',
        'deploy-ace'
    ]);

    grunt.registerTask('prepare-build-ace',
    [
        'copy:raw_ace_html_to_build',
        'copy:raw_ace_css_to_build',
        'copy:raw_ace_js_to_build',
        'copy:fix_raw_ace_js_fuelux',
        'copy:raw_ace_fonts_to_build',
        'copy:raw_ace_images1_to_build',
        'copy:raw_ace_images2_to_build',
        'copy:raw_ace_images3_to_build',
        'copy:raw_ace_images4_to_build',
        'copy:raw_ace_images5_to_build',
        'mkdir:build_ace_output_html',
        'rename:ace_css_uncompressed',
        'rename:ace_js_uncompressed',
        'clean:prepare_ace',

        'copy:build_ace_css_to_build_ace_css_develop',
        'clean:build_ace_css',

        'copy:build_ace_js_to_build_ace_js_develop',
        'clean:build_ace_js'
    ]);

    grunt.registerTask('customize-ace',
    [
        'copy:custom_ace_html_to_build',
        'copy:custom_ace_mustache_to_build',
        'copy:custom_ace_css_to_build',
        'copy:custom_ace_js_to_build',
        'copy:custom_ace_license_to_build',
        'task-wildcard-target:replace:ace'
    ]);

    grunt.registerTask('compile-ace',
    [
        'exec:build_node_ace',
        'less:build_ace_css',
        'cssmin:build_ace_css',
        'cssmin:build_ace_css_highlight',
        'uglify:build_ace_js',
        //'htmlmin:build_ace_html',
        'replace:ace_map',
        'clean:build_ace'
    ]);

    grunt.registerTask('deploy-ace',
    [
        'copy:build_ace_html_to_deploy',
        'copy:build_ace_css_to_deploy',
        'copy:build_ace_fonts_to_deploy',
        'copy:build_ace_images_to_deploy',
        'copy:build_ace_js_to_deploy',
        'copy:build_ace_license_to_deploy'
    ]);
};
