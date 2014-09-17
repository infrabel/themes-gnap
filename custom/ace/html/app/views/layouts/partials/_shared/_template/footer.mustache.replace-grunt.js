module.exports = {
    ace_html_app_views_layouts_partials_shared_template_footer: {
        src: './build/ace/html/app/views/layouts/partials/_shared/_template/footer.mustache',
        dest: './build/ace/html/app/views/layouts/partials/_shared/_template/footer.mustache',
        replacements:
        [
            {
                from: '<script src="{{{path.assets}}}/js/ace.min.js"></script>',
                to: '<script src="{{{path.assets}}}/js/ace.min.js"></script>\n\t<script src="{{{path.assets}}}/js/highlight/highlight.pack.min.js"></script>'
            },
            {
                from: '<script src="{{{path.assets}}}/js/ace.min.js"></script>',
                to: '<script src="{{{path.assets}}}/js/ace.min.js"></script>\n<script src="{{{path.assets}}}/js/layout.min.js"></script>'
            },
            {
                from: /{{{path.assets}}}\//g,
                to: ''
            },
            {
                from: '<!-- basic scripts -->',
                to: ''
            },
            {
                from: '<!-- page specific plugin scripts -->',
                to: ''
            },
            {
                from: '<!-- ace scripts -->',
                to: ''
            }
        ]
    }
};
