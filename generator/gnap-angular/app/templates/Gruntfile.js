// Generated on <%= (new Date).toISOString().split('T')[0] %> using
// <%= pkg.name %> <%= pkg.version %>
'use strict';

module.exports = function (grunt) {
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        watch: {
            livereload: {
                files: [
                    'index.html',
                    './app/**/*.html',
                    './app/**/*.js',
                    './app/**/*.json'
                ],
                options: {
                    livereload: '<%%= connect.options.livereload %>'
                }
            }
        },

        connect: {
            options: {
                port: 9000,
                open: true,
                livereload: 35729,
                // Change this to '0.0.0.0' to access the server from outside
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            connect.static('./node_modules'),
                            connect.static('./')
                        ];
                    }
                }
            }
        }
    });

    grunt.registerTask('serve', 'start the server and preview your app, --allow-remote for remote access', function (target) {
        if (grunt.option('allow-remote')) {
            grunt.config.set('connect.options.hostname', '0.0.0.0');
        }

        grunt.task.run([
            'connect:livereload',
            'watch'
        ]);
    });
};
