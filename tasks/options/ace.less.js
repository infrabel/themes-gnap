module.exports = {
    build_ace_css: {
        options: {
            compress: false,
            yuicompress: false
            // TODO: Use the correct options
        },
        files: {
            './build/ace/css/develop/ace.css': './build/ace/css/less/ace.less'
        }
    }
};
