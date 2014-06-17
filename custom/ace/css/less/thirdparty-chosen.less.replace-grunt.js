module.exports = {
    ace_css_less_thirdparty_chosen: {
        src: './build/ace/css/less/thirdparty-chosen.less',
        dest: './build/ace/css/less/thirdparty-chosen.less',
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
