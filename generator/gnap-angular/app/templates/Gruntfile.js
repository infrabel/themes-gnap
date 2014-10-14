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
            livereload: {
                files: [
                    './src/index.html',
                    './src/app/**/*.html',
                    './src/app/**/*.json'
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
                            connect.static('./src'),
                            connect().use('/node_modules', connect.static('./node_modules'))
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
                    'dist/images',
                    'dist/styles'
                ]
            },
            html: ['./dist/index.html'],
            css: ['dist/styles/{,*/}*.css']
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
                            './images/**/*.*'
                        ]
                    },
                    {
                        expand: true,
                        dot: true,
                        cwd: 'node_modules/<%= themeName %>/js/angular/i18n',
                        dest: './dist/vendor/js/angular/i18n',
                        src: [
                            './*.js'
                        ]
                    }
                ]
            }
        },

        replace: {
            dist: {
                src: ['./dist/index.html', './dist/app/js/app.js', './dist/vendor/css/*.css'],
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
                        from: 'node_modules/<%= themeName %>/js/angular/i18n',
                        to: 'vendor/js/angular/i18n',
                    }
                ]
            }
        },

        uglify: {
            dist: {
                files: [{
                    expand: true,
                    flatten: false,
                    cwd: './dist/vendor/js/angular/i18n/',
                    src: ['./*.js'],
                    dest: './dist/vendor/js/angular/i18n/'
                }]
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
                files: [{
                    expand: true,
                    cwd: './dist',
                    src: '**/*.html',
                    dest: './dist'
                }]
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
            return grunt.task.run(['build', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'connect:livereload',
            'watch'
        ]);
    });

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concat:generated',
        'cssmin:generated',
        'uglify:generated',
        'copy:dist',
        //'rev',
        'usemin' ,
        'htmlmin',
        'replace:dist',
        'uglify:dist'
    ]);

    //grunt.registerTask('default', [
    //    'newer:jshint',
    //    'test',
    //    'build'
    //]);
};
