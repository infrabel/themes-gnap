module.exports = {
    ace_css_less_other: {
        src: './build/ace/css/less/other.less',
        dest: './build/ace/css/less/other.less',
        replacements:
        [
            {
                from: /@datepicker-active-bg:.*;/g,
                to: '@datepicker-active-bg: @custom-datepicker-active-bg;'
            }
        ]
    }
};
