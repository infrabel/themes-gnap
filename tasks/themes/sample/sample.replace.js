module.exports = {
    sample_packagejson: {
        src: ['./deploy/vendor/gnap-theme-sample/package.json'],
        overwrite: true,
        replacements: [
            {
                from: '0.0.0',
                to: '<%= grunt.task.current.args[0] %>'
            }
        ]     
    }
};
