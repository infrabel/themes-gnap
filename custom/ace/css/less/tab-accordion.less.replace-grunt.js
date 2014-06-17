module.exports = {
    ace_css_less_tab_accordion: {
        src: './build/ace/css/less/tab-accordion.less',
        dest: './build/ace/css/less/tab-accordion.less',
        replacements:
        [
            {
                from: /@tab-color-blue:.*;/g,
                to: '@tab-color-blue: @custom-tab-color;'
            },
            {
                from: /#4F99C6/g,
                to: '@custom-base-primary-color2'
            }
        ]
    }
};
