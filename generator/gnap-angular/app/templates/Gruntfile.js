// Generated on <%= (new Date).toISOString().split('T')[0] %> using
// <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function(grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            js: {
                files: ['./src/app/**/*.js'],
                tasks: ['jshint'],
                options: {
                    livereload: '<%%= connect.options.livereload %>',
                    livereloadOnError: false
                }
            },
            css: {
                files: ['./src/css/**/*.css'],
                tasks: ['copy:css', 'autoprefixer']
            },
            livereload: {
                files: [
                    './src/index.html',
                    './src/app/**/*.html',
                    './src/app/**/*.json',
                    './.tmp/css/**/*.css'
                ],
                options: {
                    livereload: '<%%= connect.options.livereload %>',
                    livereloadOnError: false
                }
            }
        },

        connect: {
            options: {
                port: <%= portNumber %>,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function(connect) {
                        return [
                            connect().use('/css', connect.static('./.tmp/css')),
                            connect.static('./src'),
                            connect().use('/node_modules', connect.static('./node_modules')),
                            connect().use('/js/gnap', connect.static('./node_modules/<%= themeName %>/js/gnap')),
                            connect().use('/js/angular', connect.static('./node_modules/<%= themeName %>/js/angular'))
                        ];
                    }
                }
            },
            dist: {
                options: {
                    base: './dist',
                    livereload: false
                }
            }
        },

        // https://github.com/postcss/autoprefixer#browsers
        // npm update caniuse-db
        autoprefixer: {
            options: {
                browsers: ['> 0%', 'last 2 versions', 'ie 8', 'ie 9']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/css/',
                    src: '**/*.css',
                    dest: '.tmp/css/'
                }]
            }
        },

        useminPrepare: {
            options: {
                dest: 'dist'
            },
            html: './src/index.html'
        },

        usemin: {
            options: {
                assetsDirs: [
                    'dist',
                    'dist/vendor/images',
                    'dist/vendor/css',
                    'dist/vendor/fonts'
                ],
                patterns: {
                    js: [
                        [/templateUrl:"(.+?\.html)"/gm, 'Update the JS to reference our revved templates']
                    ]
                }
            },
            html: ['./dist/index.html'],
            css: ['./dist/app/css/*.css', './dist/vendor/css/*.css'],
            js: ['./dist/app/js/*.js'],
        },

        rev: {
            predist: {
                files: {
                    src: [
                        // TODO: dist/app/ *.json
                        './dist/app/**/*.html',
                        './dist/app/js/*.js',
                        './dist/app/css/*.css',
                        './dist/vendor/css/*.css',
                        './dist/vendor/fonts/*.*',
                        './dist/vendor/images/**/*.*',
                        './dist/vendor/js/*.js'
                    ]
                }
            },
            dist: {
                files: {
                    src: [
                        './dist/app/css/*.css',
                        './dist/vendor/css/*.css',
                        './dist/app/js/*.js'
                    ]
                }
            }
        },

        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            'dist/*',
                            '!dist/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },

        copy: {
            css: {
                expand: true,
                dot: true,
                cwd: './src/css/',
                dest: '.tmp/css/',
                src: '**/*.css'
            },
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: 'src',
                        dest: 'dist',
                        src: [
                            './index.html',
                            './**/*.html',
                            './**/*.json'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'node_modules/<%= themeName %>',
                        dest: './dist/vendor',
                        src: [
                            './fonts/*.*',
                            './images/*.*',
                            './images/**/*.*',
                            './js/gnap/*.json',
                            './js/angular/i18n/*.js'
                        ]
                    }
                ]
            }
        },

        replace: {
            translations: {
                src: ['./dist/vendor/js/vendor.js'],
                overwrite: true,
                replacements: [
                    {
                        from: '{part}/translations.{lang}.json', // TODO: In the future this should probably come from a replace token
                        to: '{part}/translations.{lang}.json?<%%= grunt.task.current.args[0] %>'
                    }
                ]
            },

            dist: {
                src: ['./dist/index.html', './dist/app/js/app.js', './dist/vendor/js/vendor.js', './dist/vendor/css/*.css'],
                overwrite: true,
                replacements: [
                    {
                        from: 'node_modules/<%= themeName %>/images/',
                        to: 'vendor/images/'
                    },
                    {
                        from: 'url("../../fonts',
                        to: 'url("../fonts',
                    },
                    {
                        from: 'url(\'../../fonts',
                        to: 'url(\'../fonts',
                    },
                    {
                        from: 'url(../../fonts',
                        to: 'url(../fonts',
                    },
                    {
                        from: 'url("../../images',
                        to: 'url("../images',
                    },
                    {
                        from: 'url(\'../../images',
                        to: 'url(\'../images',
                    },
                    {
                        from: 'url(../../images',
                        to: 'url(../images',
                    },
                    {
                        from: 'js/angular/i18n',
                        to: 'vendor/js/angular/i18n',
                    },
                    {
                        from: 'addPart("js/gnap")',
                        to: 'addPart("vendor/js/gnap")',
                    }
                ]
            }
        },

        uglify: {
            dist: {
                files: [
                    {
                        expand: true,
                        flatten: false,
                        cwd: './dist/vendor/js/angular/i18n/',
                        src: ['./*.js'],
                        dest: './dist/vendor/js/angular/i18n/'
                    }
                ]
            }
        },

        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    conservativeCollapse: true,
                    preserveLineBreaks: true,
                    removeAttributeQuotes: true,
                    removeRedundantAttributes: true
                },
                files: [
                    {
                        expand: true,
                        cwd: './dist',
                        src: '**/*.html',
                        dest: './dist'
                    }
                ]
            }
        },

        concat: {
            translations: {
                files: [
                    {
                        dest: '.tmp/translations.json',
                        src: ['./dist/vendor/**/translations.en.json',
                              './dist/vendor/**/translations.fr.json',
                              './dist/vendor/**/translations.nl.json',
                              './dist/app/**/translations.en.json', 
                              './dist/app/**/translations.fr.json', 
                              './dist/app/**/translations.nl.json']
                    }
                ]
            }
        },

        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: [
                'Gruntfile.js',
                './src/app/*.js',
                './src/app/**/*.js'
            ]
        }
    });

    grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function(target) {
        if (grunt.option('allow-remote')) {
            grunt.config.set('connect.options.hostname', '0.0.0.0');
        }

        if (target === 'dist') {
            return grunt.task.run(['dist', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'copy:css',
            'autoprefixer',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('hash-translations', function() {
        var hash = require('crypto').createHash('md5');
        hash.update(grunt.file.read('.tmp/translations.json'), 'utf8');
        var translationHash = hash.digest('hex').slice(0, 8);

        grunt.log.write('Translation hash: ' + translationHash);
        grunt.task.run(['replace:translations:' + translationHash]);
    });

    grunt.registerTask('dist', [
        'clean:dist',
        'useminPrepare',
        'copy:css',
        'autoprefixer',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'copy:dist',
        'concat:translations',
        'replace:dist',
        'uglify:dist',
        'hash-translations',
        'rev:predist',
        'usemin',
        'rev:dist',
        'usemin:html',
        'htmlmin'
    ]);

    //grunt.registerTask('default', [
    //    'newer:jshint',
    //    'test',
    //    'build'
    //]);
};
