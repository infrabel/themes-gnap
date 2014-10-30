module.exports = {
    'gnap-angular': {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish')
        },
        files: {
            src: [
                './build/gnap-angular/app/*.js',
                './build/gnap-angular/app/**/*.js',
                './build/gnap-angular/js/develop/gnap/*.js',
                './build/gnap-angular/js/develop/gnap/**/*.js'

                //'./custom/gnap-angular/app/*.js',
                //'./custom/gnap-angular/app/**/*.js',
                //'./custom/gnap-angular/js/develop/gnap/*.js',
                //'./custom/gnap-angular/js/develop/gnap/**/*.js'
            ]
        }
    }
};
