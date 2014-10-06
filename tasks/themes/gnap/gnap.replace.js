module.exports = {
    gnap_packagejson: {
        src: ['./deploy/vendor/gnap-theme-gnap/package.json', './deploy/vendor/gnap-theme-gnap/package.json'],
        overwrite: true,
        replacements: [
            {
                from: '0.0.0',
                to: '<%= grunt.task.current.args[0] %>'
            }
        ]     
    }
};
