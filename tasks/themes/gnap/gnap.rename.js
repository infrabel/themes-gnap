module.exports = {
    gnap_ace_less: {
        files: [
            {
                src: './build/ace/css/less/ace.less',
                dest: './build/ace/css/less/ace.orig.less'
            }
        ]
    },

    gnap_ace_jquery: {
        files: [
            {
                src: './build/ace/js/jquery-*.min.js',
                dest: './build/ace/js/jquery.min.js'
            }
        ]
    }
};
