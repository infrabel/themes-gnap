module.exports = {
    prepare_ace: [
        './build/ace/css/develop/ace.css',
        './build/ace/css/develop/ace-rtl.css',

        './build/ace/css/ace.min.css',       
        './build/ace/css/ace-ie.min.css',
        './build/ace/css/ace-rtl.min.css',
        './build/ace/css/ace-skins.min.css',
        './build/ace/css/bootstrap.min.css',
        './build/ace/css/chosen.css',
        './build/ace/css/chosen.min.css',
        './build/ace/css/font-awesome.min.css',
        './build/ace/css/font-awesome-ie7.min.css',
        './build/ace/css/jquery-ui-1.10.3.custom.min.css',
        './build/ace/css/jquery-ui-1.10.3.full.min.css',

        './build/ace/js/date-time/',
        './build/ace/js/flot/',
        './build/ace/js/fuelux/',
        './build/ace/js/markdown/',
        './build/ace/js/x-editable/',

        './build/ace/js/develop/jquery-*.js',
        './build/ace/js/*.min.js',
        '!./build/ace/js/dropzone.min.js',
        '!./build/ace/js/jquery.nestable.min.js',
        '!./build/ace/js/typeahead-bs2.min.js'
    ],

    build_ace_css: [
        './build/ace/css/*.css'
    ],

    build_ace_js: [
        './build/ace/js/*.js',
        '!./build/ace/js/*min.js'
    ],

    build_ace: [
        './build/ace/**/*-grunt.js',
        './build/ace/**/*-grunt.min.js',
        './build/ace/css/less/*',
        './build/ace/css/less/',
        './build/ace/js/date-time/locales/*.map'
    ]
};
