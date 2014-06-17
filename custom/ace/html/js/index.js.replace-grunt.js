module.exports = {
    ace_html_js_index: {
        src: './build/ace/html/js/index.js',
        dest: './build/ace/html/js/index.js',
        replacements:
        [
            {
                from: /assets : 'assets'/g,
                to: 'assets : \'\''
            },
            {
                from: /images : 'assets\/images'/g,
                to: 'images : \'images\''
            }
        ]
    }
};
