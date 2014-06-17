module.exports = {
    ace_html_app_views_pages_404: {
        src: './build/ace/html/app/views/pages/error-404.mustache',
        dest: './build/ace/html/app/views/pages/error-404.mustache',
        replacements:
        [
            {
                from: '<i class="icon-dashboard"></i> Dashboard',
                to: '<i class="icon-home"></i> Home'
            },
            {
                from: 'blue',
                to: 'theme_color'
            }
        ]
    }
}