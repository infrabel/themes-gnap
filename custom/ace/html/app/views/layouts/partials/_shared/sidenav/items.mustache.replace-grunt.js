module.exports = {
    ace_html_app_views_layouts_partials_shared_sidenav_items: {
        src: './build/ace/html/app/views/layouts/partials/_shared/sidenav/items.mustache',
        dest: './build/ace/html/app/views/layouts/partials/_shared/sidenav/items.mustache',
        replacements:
        [
            {
                from: '<li{{#class}} class="{{class}}"{{/class}}>{{! print class name (active, open, etc) if it exists }}',
                to: '<li{{#class}} aria-haspopup="true" class="{{class}}"{{/class}}>{{! print class name (active, open, etc) if it exists }}'
            }
        ]
    }
};
