module.exports = {
    ace_css_develop_colorbox: {
        src: './build/ace/css/develop/colorbox.css',
        dest: './build/ace/css/develop/colorbox.css',
        replacements:
        [
            {
                from: 'images/',
                to: '../images/'
            }
        ]
    }
};
