module.exports = {
    gnap_ace_select2: [
        './build/ace/js/develop/select2.js'
    ],

    gnap_deploy: [
        './deploy/*',
        '!./deploy/gnap/**',

        './deploy/gnap/*.html',
        '!./deploy/gnap/blank.html',
        '!./deploy/gnap/examples.html',
        '!./deploy/gnap/typography.html',
        '!./deploy/gnap/error-404.html',
        '!./deploy/gnap/error-500.html',
        '!./deploy/gnap/login.html',
        '!./deploy/gnap/about.html',
        '!./deploy/gnap/gallery.html',
        '!./deploy/gnap/treeview.html',
        '!./deploy/gnap/LICENSE-Ace'
    ]
};
