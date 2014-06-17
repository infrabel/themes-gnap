module.exports = {
    ace_html_js_classes_Page: {
        src: './build/ace/html/js/classes/Page.js',
        dest: './build/ace/html/js/classes/Page.js',
        replacements:
        [
            {
                from: '$vars["layout"] = "default"',
                to: '$vars["layout"] = "internal"'
            }
        ]
    }
};
