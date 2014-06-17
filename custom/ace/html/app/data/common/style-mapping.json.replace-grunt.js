module.exports = {
    ace_html_app_data_common_style_mapping: {
        src: './build/ace/html/app/data/common/style-mapping.json',
        dest: './build/ace/html/app/data/common/style-mapping.json',
        replacements:
        [
            {
                from: '.min.css',
                to: '.css'
            },
            {
                from: '.css',
                to: '.min.css'
            }
        ]
    }
};
