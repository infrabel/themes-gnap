module.exports = {
    ace_js_develop_ace: {
        src: './build/ace/js/develop/ace.js',
        dest: './build/ace/js/develop/ace.js',
        replacements:
        [
            {
                from: 'ace.settings.sidebar_collapsed(!$minimized);//@ ace-extra.js',
                to: ''
            }
        ]
    }
};
