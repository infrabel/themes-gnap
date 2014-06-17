module.exports = {
    ace_html_app_views_layouts_partials_login_template_header: {
        src: './build/ace/html/app/views/layouts/partials/login/_template/header.mustache',
        dest: './build/ace/html/app/views/layouts/partials/login/_template/header.mustache',
        replacements:
        [
            {
                from: /{{{path.assets}}}\//g,
                to: ''
            }
        ]
    }
}