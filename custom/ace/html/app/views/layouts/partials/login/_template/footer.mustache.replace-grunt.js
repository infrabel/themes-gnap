module.exports = {
    ace_html_app_views_layouts_partials_login_template_footer: {
        src: './build/ace/html/app/views/layouts/partials/login/_template/footer.mustache',
        dest: './build/ace/html/app/views/layouts/partials/login/_template/footer.mustache',
        replacements:
        [
            {
                from: /{{{path.assets}}}\//g,
                to: ''
            }
        ]
    }
}