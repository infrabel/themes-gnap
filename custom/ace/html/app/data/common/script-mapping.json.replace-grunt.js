module.exports = {
    ace_html_app_data_common_script_mapping: {
        src: './build/ace/html/app/data/common/script-mapping.json',
        dest: './build/ace/html/app/data/common/script-mapping.json',
        replacements:
        [
            {
                from: '"select2.min.js"',
                to: '"select2/select2.min.js"'
            },
            {
                from: '.min.js',
                to: '.js'
            },
            {
                from: '-min.js',
                to: '.js'
            },
            {
                from: '.js',
                to: '.min.js'
            }
        ]
    }
};
