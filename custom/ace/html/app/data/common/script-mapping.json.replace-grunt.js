module.exports = {
    ace_html_app_data_common_script_mapping: {
        src: './build/ace/html/app/data/common/script-mapping.json',
        dest: './build/ace/html/app/data/common/script-mapping.json',
        replacements:
        [
            {
                from: '.min.js',
                to: '.js'
            },
            {
                from: '.js',
                to: '.min.js'
            }
        ]
    }
};
