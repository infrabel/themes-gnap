module.exports = {
    ace_css_less_tables: {
        src: './build/ace/css/less/tables.less',
        dest: './build/ace/css/less/tables.less',
        replacements:
        [
            {
                from: /@table-sort-hover:.*;/g,
                to: '@table-sort-hover: @custom-base-primary-color2;'
            },
            {
                from: /@table-sort-active:.*;/g,
                to: '@table-sort-active: @custom-base-primary-color2;'
            }
        ]
    }
};
