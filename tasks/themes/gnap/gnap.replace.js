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
    },

    gnap_develop: {
        src: ['./build/ace/css/develop/*.css', './build/ace/css/develop/**/*.css'],
        overwrite: true,
        replacements: [
            {
                from: 'url("../fonts',
                to: 'url("../../fonts',
            },
            {
                from: 'url(\'../fonts',
                to: 'url(\'../../fonts',
            },
            {
                from: 'url(\../fonts',
                to: 'url(\../../fonts',
            },
            {
                from: 'url("../images',
                to: 'url("../../images',
            },
            {
                from: 'url(\'../images',
                to: 'url(\'../../images',
            },
            {
                from: 'url(../images',
                to: 'url(../../images',
            }
        ]
    }
};
