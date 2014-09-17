module.exports = {
    ace_css_less_thirdparty_select2: {
        src: './build/ace/css/less/thirdparty-select2.less',
        dest: './build/ace/css/less/thirdparty-select2.less',
        replacements:
        [
            {
                from: /#4492C9/g,
                to: '@custom-base-primary-color2'
            },
            {
                from: /#316AC5/g,
                to: '@custom-base-primary-color2'
            }
        ]
    }
};
