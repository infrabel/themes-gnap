module.exports = {
    ace_html_js_index: {
        src: './build/ace/html/js/index.js',
        dest: './build/ace/html/js/index.js',
        replacements:
        [
            {
                from: /assets : 'assets'/g,
                to: 'assets : \'\''
            },
            {
                from: /images : 'assets\/images'/g,
                to: 'images : \'images\''
            },
            {
                from: 'var output_file = \'output_folder/\'+page_name+\'.html\';',
                to: 'result = result.replace(/<pre class="example">[\\s\\S]*?<code/g, \'<pre class="example"><code\');\n\t\t\tresult = result.replace(/<\\/code>[\\s\\S]*?<\\/pre>/g, \'</code></pre>\');\n\n\t\t\tvar output_file = \'output_folder/\'+page_name+\'.html\';',
            }
        ]
    }
};
