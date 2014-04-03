module.exports = function(grunt) {
    grunt.registerMultiTask('bake', 'build a theme', function () {
        var t = this.target;

        grunt.task.run('clean');
        grunt.task.run('build-' + t);
    });
};