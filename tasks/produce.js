module.exports = function(grunt) {
    grunt.registerMultiTask('produce', 'release a theme', function () {
        var t = this.target;

        grunt.task.run('bake:' + t);
        grunt.task.run('package-release-' + t);
    });
};
