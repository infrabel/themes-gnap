module.exports = {
    ace_css_less_form_checkbox: {
        src: './build/ace/css/less/form-checkbox.less',
        dest: './build/ace/css/less/form-checkbox.less',
        replacements:
        [
            {
                from: /@checkbox-hover-border:.*;/g,
                to: '@checkbox-hover-border: @custom-checkbox-hover-border;'
            },
            {
                from: /@checkbox2-bg:.*;/g,
                to: '@checkbox2-bg: @custom-checkbox2-bg;'
            },
            {
                from: /@switch4-checked-bg:.*;/g,
                to: '@switch4-checked-bg: @custom-switch4-checked-bg;'
            },
            {
                from: /@switch6-checked-bg:.*;/g,
                to: '@switch6-checked-bg: @custom-switch6-checked-bg;'
            },
            {
                from: /@switch7-checked-bg:.*;/g,
                to: '@switch7-checked-bg: @custom-switch7-checked-bg;'
            },
            {
                from: /@switch7-checked-border:.*;/g,
                to: '@switch7-checked-border: @custom-switch7-checked-border;'
            }
        ]
    }
};
