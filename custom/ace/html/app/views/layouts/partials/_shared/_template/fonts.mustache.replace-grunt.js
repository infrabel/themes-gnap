module.exports = {
    ace_html_app_views_layouts_partials_shared_template_fonts: {
        src: './build/ace/html/app/views/layouts/partials/_shared/_template/fonts.mustache',
        dest: './build/ace/html/app/views/layouts/partials/_shared/_template/fonts.mustache',
        replacements:
        [
            {
                from: /{{{path.assets}}}\//g,
                to: ''
            },
            {
                from: 'ace-fonts.css',
                to: 'ace-fonts.min.css'
            }
        ]
    }
};
