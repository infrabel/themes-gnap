module.exports = {
    ace_html_app_views_layouts_partials_shared_template_header: {
        src: './build/ace/html/app/views/layouts/partials/_shared/_template/header.mustache',
        dest: './build/ace/html/app/views/layouts/partials/_shared/_template/header.mustache',
        replacements:
        [
            {
                from: '</head>',
                to: '\t<link rel="stylesheet" href="css/ie9.min.css" />\n</head>'
            },
            {
                from: '</head>',
                to: '\t<link rel="stylesheet" href="css/custom.min.css" />\n</head>'
            },
            {
                from: '</head>',
                to: '\t<script src="{{{path.assets}}}/js/modernizr.min.js"></script>\n</head>'
            },
            {
                from: '</head>',
                to: '\t<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />\n</head>'
            },
            {
                from: '<link rel="stylesheet" href="{{{path.assets}}}/css/ace-ie.min.css" />',
                to: '<link rel="stylesheet" href="{{{path.assets}}}/css/ace-ie.min.css" />\n\t<link rel="stylesheet" href="{{{path.assets}}}/css/ie8.min.css" />'
            },
            {
                from: '<link rel="stylesheet" href="{{{path.assets}}}/css/ace-rtl.min.css" />',
                to: ''
            },
            {
                from: '<script src="{{{path.assets}}}/js/ace-extra.min.js"></script>',
                to: ''
            },
            {
                from: /{{{path.assets}}}\//g,
                to: ''
            },
            {
                from: 'html5shiv.js',
                to: 'html5shiv.min.js'
            },
            {
                from: '<!-- basic styles -->',
                to: ''
            },
            {
                from: '<!-- page specific plugin styles -->',
                to: ''
            },
            {
                from: '<!-- fonts -->',
                to: ''
            },
            {
                from: '<!-- ace styles -->',
                to: ''
            },
            {
                from: '<!-- inline styles related to this page -->',
                to: ''
            },
            {
                from: '<!-- ace settings handler -->',
                to: ''
            },
            {
                from: '<!-- HTML5 shim and Respond.js IE8 support of HTML5 elements and media queries -->',
                to: ''
            }
        ]
    }
};
