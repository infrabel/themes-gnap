module.exports = {
    ace_css_develop_colorpicker: {
        src: './build/ace/css/develop/colorpicker.css',
        dest: './build/ace/css/develop/colorpicker.css',
        replacements:
        [
            {
                from: 'img/',
                to: '../images/'
            }
        ]
    }
};
