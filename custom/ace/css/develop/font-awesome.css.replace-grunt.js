module.exports = {
    ace_css_develop_font_awesome: {
        src: './build/ace/css/develop/font-awesome.css',
        dest: './build/ace/css/develop/font-awesome.css',
        replacements:
        [
            {
                from: '../font/',
                to: '../fonts/'
            }
        ]
    }
};
