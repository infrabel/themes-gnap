module.exports = {
    select2_css_develop_select2: {
        src: './build/ace/css/develop/select2.css',
        dest: './build/ace/css/develop/select2.css',
        replacements:
        [
            {
                from: 'select2.png',
                to: '../images/select2.png'
            },
            {
                from: 'select2-spinner.gif',
                to: '../images/select2-spinner.gif'
            }
        ]
    }
};
