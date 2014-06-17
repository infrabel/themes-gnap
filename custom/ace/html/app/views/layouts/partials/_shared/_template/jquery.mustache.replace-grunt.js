module.exports = {
    ace_html_app_views_layouts_partials_shared_template_jquery: {
        src: './build/ace/html/app/views/layouts/partials/_shared/_template/jquery.mustache',
        dest: './build/ace/html/app/views/layouts/partials/_shared/_template/jquery.mustache',
        replacements:
        [
            {
                from: /{{{path.assets}}}\//g,
                to: ''
            }
        ]
    }
};
