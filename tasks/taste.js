module.exports = function(grunt) {
    grunt.registerMultiTask('taste', 'test a theme', function () {
        var t = this.target;

        grunt.task.run('bake:' + t);

        // TODO: Build nuget without incrementing version (or maybe put in a 0.0.0 version?)
    });
};