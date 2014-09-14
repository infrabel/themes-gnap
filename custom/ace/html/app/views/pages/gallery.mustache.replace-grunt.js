module.exports = {
    ace_html_app_views_pages_gallery: {
        src: './build/ace/html/app/views/pages/gallery.mustache',
        dest: './build/ace/html/app/views/pages/gallery.mustache',
        replacements:
        [
            {
                from: '</ul>',
                to: '</ul>\n{{> page.gallery}}'
            }
        ]
    }
}