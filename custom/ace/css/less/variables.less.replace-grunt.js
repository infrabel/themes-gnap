module.exports = {
    ace_css_less_variables: {
        src: './build/ace/css/less/variables.less',
        dest: './build/ace/css/less/variables.less',
        replacements:
        [
            {
                from: /@navbar-bg:.*;/g,
                to: '@navbar-bg: @custom-nav-bar-bg;'
            },
            {
                from: /@navbar-text-color:.*;/g,
                to: '@navbar-text-color: @custom-nav-bar-text-color;'
            },
            {
                from: /@ace-nav-light-blue:.*;/g,
                to: '@ace-nav-light-blue: @custom-base-primary-color;'
            },
            {
                from: /@ace-nav-light-blue2:.*;/g,
                to: '@ace-nav-light-blue2: @custom-base-primary-color2;'
            },
            {
                from: /@btn-primary:.*;/g,
                to: '@btn-primary: @custom-base-primary-color;'
            },
            {
                from: /@btn-primary-hover:.*;/g,
                to: '@btn-primary-hover: @custom-base-primary-color2;'
            },
            {
                from: /@btn-app-primary-1:.*;/g,
                to: '@btn-app-primary-1: @custom-base-primary-color;'
            },
            {
                from: /@btn-app-primary-2:.*;/g,
                to: '@btn-app-primary-2: @custom-base-primary-color2;'
            },
            {
                from: /@progress-color:.*;/g,
                to: '@progress-color: @custom-progress-color;'
            },
            {
                from: /@slider-color:.*;/g,
                to: '@slider-color: @custom-slider-color;'
            },
            {
                from: /@widget-blue:.*;/g,
                to: '@widget-blue: @custom-widget-blue;'
            },
            {
                from: /@dropdown-menu:.*;/g,
                to: '@dropdown-menu: @custom-base-primary-color2;'
            },
            {
                from: /@dropdown-default:.*;/g,
                to: '@dropdown-default: @custom-base-primary-color2;'
            },
            {
                from: /@tab-active-border:.*;/g,
                to: '@tab-active-border: @custom-base-primary-color;'
            },
            {
                from: /@tab-hover-color:.*;/g,
                to: '@tab-hover-color: @custom-base-primary-color2;'
            },
            {
                from: /@widget-header-color:.*;/g,
                to: '@widget-header-color: @custom-base-primary-color;'
            }
        ]
    }
};
