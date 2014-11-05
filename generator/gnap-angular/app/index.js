'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');
var clc = require('cli-color');

var GNaPGenerator = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var self = this,
            done = self.async();

        self.inputRequired = function (input, inputName) {
            if (input)
                return true;

            return inputName + ' is required!';
        };

        self.isValidPortNumber = function(input) {
            if (!/^[0-9]+$/.test('' + input))
                return 'Port number must be a number!';

            if (input > 65535)
                return 'Port number must be less than 65535';

            if (input < 1)
                return 'Port number must be greater than 1';

            return true;
        };

        self.log(yosay('Welcome to the outstanding GNaP generator!'));

        var prompts = [
            {
                type: 'input',
                name: 'app-name',
                message: 'What is the project name of your application?',
                validate: function (input) { return self.inputRequired(input, 'Project name'); }
            },

            {
                type: 'input',
                name: 'app-title',
                message: 'What is the title of your application?',
                validate: function (input) { return self.inputRequired(input, 'Project title'); }
            },

            {
                type: 'list',
                name: 'theme-name',
                message: 'Which theme does your application use?',
                choices: [
                {
                    name: 'GNaP.Themes.Web.GNaP.Angular',
                    value: 'gnap-theme-gnap-angular'
                }],
                default: 'gnap-theme-gnap-angular',
                validate: function (input) { return inputRequired(input, 'Theme'); }
            },

            {
                type: 'input',
                name: 'port-number',
                message: 'Which port should the development server run on?',
                validate: function (input) { return self.isValidPortNumber(input); },
                default: 9000
            }
        ];

        self.prompt(prompts, function (props) {
            this.appName = props['app-name'].replace(/\s+/g, '-').toLowerCase();
            this.appTitle = props['app-title'];
            this.themeName = props['theme-name'].toLowerCase();
            this.portNumber = props['port-number'];

            this.config.set('app-name', this.appName);
            this.config.set('app-title', this.appTitle);
            this.config.set('theme-name', this.themeName);
            this.config.set('port-number', this.portNumber);

            done();
        }.bind(self));
    },

    writing: {
        app: function () {
            var self = this;

            self.template('Gruntfile.js', 'Gruntfile.js', { pkg: self.pkg, portNumber: self.portNumber, themeName: self.themeName });
            self.src.copy('jshintrc', '.jshintrc');
            self.template('_package.json', 'package.json', { appName: self.appName, appTitle: self.appTitle, themeName: self.themeName });

            self.dest.mkdir('src');
            self.template('src/index.html', 'src/index.html', { appName: self.appName, themeName: self.themeName });

            self.dest.mkdir('src/css');
            self.src.copy('src/css/app.css', 'src/css/app.css');

            self.dest.mkdir('src/app');
            self.template('src/app/app.config.js', 'src/app/app.config.js', { appName: self.appName, appTitle: self.appTitle, themeName: self.themeName });
            self.template('src/app/app.module.js', 'src/app/app.module.js', { appName: self.appName });

            self.dest.mkdir('src/app/main');
            self.template('src/app/main/main.controller.js', 'src/app/main/main.controller.js', { appName: self.appName });
            self.src.copy('src/app/main/main.html', 'src/app/main/main.html');
            self.template('src/app/main/main.state.js', 'src/app/main/main.state.js', { appName: self.appName });

            self.template('src/app/main/session-dropdown.directive.js', 'src/app/main/session-dropdown.directive.js', { appName: self.appName });
            self.src.copy('src/app/main/session-dropdown.html', 'src/app/main/session-dropdown.html');

            self.src.copy('src/app/main/translations.en.json', 'src/app/main/translations.en.json');
            self.src.copy('src/app/main/translations.fr.json', 'src/app/main/translations.fr.json');
            self.src.copy('src/app/main/translations.nl.json', 'src/app/main/translations.nl.json');

            self.dest.mkdir('src/app/main/getting-started');
            self.template('src/app/main/getting-started/getting-started.controller.js', 'src/app/main/getting-started/getting-started.controller.js', { appName: self.appName });
            self.src.copy('src/app/main/getting-started/getting-started.html', 'src/app/main/getting-started/getting-started.html');
            self.template('src/app/main/getting-started/getting-started.state.js', 'src/app/main/getting-started/getting-started.state.js', { appName: self.appName });
            self.src.copy('src/app/main/getting-started/translations.en.json', 'src/app/main/getting-started/translations.en.json');
            self.src.copy('src/app/main/getting-started/translations.fr.json', 'src/app/main/getting-started/translations.fr.json');
            self.src.copy('src/app/main/getting-started/translations.nl.json', 'src/app/main/getting-started/translations.nl.json');

            self.dest.mkdir('src/app/main/forbidden');
            self.template('src/app/main/forbidden/forbidden.controller.js', 'src/app/main/forbidden/forbidden.controller.js', { appName: self.appName });
            self.src.copy('src/app/main/forbidden/forbidden.html', 'src/app/main/forbidden/forbidden.html');
            self.template('src/app/main/forbidden/forbidden.state.js', 'src/app/main/forbidden/forbidden.state.js', { appName: self.appName });
            self.src.copy('src/app/main/forbidden/translations.en.json', 'src/app/main/forbidden/translations.en.json');
            self.src.copy('src/app/main/forbidden/translations.fr.json', 'src/app/main/forbidden/translations.fr.json');
            self.src.copy('src/app/main/forbidden/translations.nl.json', 'src/app/main/forbidden/translations.nl.json');

            self.dest.mkdir('src/app/main/notfound');
            self.template('src/app/main/notfound/notfound.controller.js', 'src/app/main/notfound/notfound.controller.js', { appName: self.appName });
            self.src.copy('src/app/main/notfound/notfound.html', 'src/app/main/notfound/notfound.html');
            self.template('src/app/main/notfound/notfound.state.js', 'src/app/main/notfound/notfound.state.js', { appName: self.appName });
            self.src.copy('src/app/main/notfound/translations.en.json', 'src/app/main/notfound/translations.en.json');
            self.src.copy('src/app/main/notfound/translations.fr.json', 'src/app/main/notfound/translations.fr.json');
            self.src.copy('src/app/main/notfound/translations.nl.json', 'src/app/main/notfound/translations.nl.json');

            self.dest.mkdir('src/app/public');
            self.template('src/app/public/public.controller.js', 'src/app/public/public.controller.js', { appName: self.appName });
            self.src.copy('src/app/public/public.html', 'src/app/public/public.html');
            self.template('src/app/public/public.state.js', 'src/app/public/public.state.js', { appName: self.appName });

            self.dest.mkdir('src/app/public/login');
            self.template('src/app/public/login/login.controller.js', 'src/app/public/login/login.controller.js', { appName: self.appName });
            self.template('src/app/public/login/login.html', 'src/app/public/login/login.html', { appTitle: self.appTitle });
            self.template('src/app/public/login/login.state.js', 'src/app/public/login/login.state.js', { appName: self.appName });
            self.src.copy('src/app/public/login/translations.en.json', 'src/app/public/login/translations.en.json');
            self.src.copy('src/app/public/login/translations.fr.json', 'src/app/public/login/translations.fr.json');
            self.src.copy('src/app/public/login/translations.nl.json', 'src/app/public/login/translations.nl.json');

            self.dest.mkdir('src/vendor');
        }
    },

    end: function () {
        var self = this,
            done = self.async();

        self.log(clc.green('   create') + ' theme (' + clc.cyan(self.themeName) + ')');
        self.npmInstall([self.themeName], {}, function() {
            self.npmInstall(['grunt',
                             'grunt-autoprefixer',
                             'grunt-contrib-clean',
                             'grunt-contrib-concat',
                             'grunt-contrib-connect',
                             'grunt-contrib-copy',
                             'grunt-contrib-cssmin',
                             'grunt-contrib-htmlmin',
                             'grunt-contrib-jshint',
                             'grunt-contrib-uglify',
                             'grunt-contrib-watch',
                             'grunt-rev',
                             'grunt-text-replace',
                             'grunt-usemin',
                             'jshint-stylish',
                             'load-grunt-tasks',
                             'time-grunt'], { 'saveDev': true }, function() {
                self.log();
                self.log(clc.green('!') + clc.whiteBright(' Successfully created ') + clc.cyan(self.appName));
                self.log(clc.green('!') + clc.whiteBright(' To see your site, run:'));
                self.log('\t' + clc.yellowBright('grunt serve'));

                done();
            });
        });
    }
});

module.exports = GNaPGenerator;
