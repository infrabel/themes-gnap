module.exports = {
    ace_html_app_data_common_site: {
        src: './build/ace/html/app/data/common/site.json',
        dest: './build/ace/html/app/data/common/site.json',
        replacements:
        [
            {
                from: / "title" : .*,/g,
                to: ' "title" : "GNaP",'
            },
            {
                from: / "brand_text" : .*,/g,
                to: ' "brand_text" : "GNaP",'
            }
        ]
    }
};
