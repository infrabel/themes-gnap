module.exports = {
    ace_css_develop_ace_ie: {
        src: './build/ace/css/develop/ace-ie.css',
        dest: './build/ace/css/develop/ace-ie.css',
        replacements:
        [
            {
                from: 'images/',
                to: '../images/'
            },
            {
                from: "filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#EA323232', endColorstr='#EA323232',GradientType=0 ) !important;",
                to: 'filter: progid:DXImageTransform.Microsoft.gradient(enabled=false) !important;'
            }
        ]
    }
};
