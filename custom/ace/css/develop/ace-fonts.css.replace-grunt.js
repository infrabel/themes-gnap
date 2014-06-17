module.exports = {
    ace_css_develop_ace_fonts: {
        src: './build/ace/css/develop/ace-fonts.css',
        dest: './build/ace/css/develop/ace-fonts.css',
        replacements:
        [
            {
                from: '../font/',
                to: '../fonts/'
            }
        ]
    }
};
