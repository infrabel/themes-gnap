module.exports = function(grunt) {
    grunt.registerMultiTask('taste', 'test a theme', function () {
        var t = this.target;

        grunt.task.run('bake:' + t);
        grunt.task.run('package-test-' + t);
    });
};
