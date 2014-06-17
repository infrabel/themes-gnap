module.exports = {
    ace_html_app_views_pages_500: {
        src: './build/ace/html/app/views/pages/error-500.mustache',
        dest: './build/ace/html/app/views/pages/error-500.mustache',
        replacements:
        [
            {
                from: '<i class="icon-dashboard"></i> Dashboard',
                to: '<i class="icon-home"></i> Home'
            },
            {
                from: '<i class="icon-wrench icon-animated-wrench bigger-125"></i>',
                to: ''
            },
            {
                from: 'blue',
                to: 'theme_color'
            }
        ]
    }
}