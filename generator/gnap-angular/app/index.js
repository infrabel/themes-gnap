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
            this.appName = props['app-name'].toLowerCase();
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

            self.template('Gruntfile.js', 'Gruntfile.js', { pkg: self.pkg, portNumber: self.portNumber });
            self.src.copy('jshintrc', '.jshintrc');
            self.template('_package.json', 'package.json', { appName: self.appName, appTitle: self.appTitle, themeName: self.themeName });
            self.template('index.html', 'index.html', { appName: self.appName, themeName: self.themeName });
            
            self.dest.mkdir('app');
            self.template('app/app.config.js', 'app/app.config.js', { appName: self.appName, appTitle: self.appTitle, themeName: self.themeName });
            self.template('app/app.module.js', 'app/app.module.js', { appName: self.appName });

            self.dest.mkdir('app/main');
            self.template('app/main/main.controller.js', 'app/main/main.controller.js', { appName: self.appName });
            self.src.copy('app/main/main.html', 'app/main/main.html');
            self.template('app/main/main.state.js', 'app/main/main.state.js', { appName: self.appName });

            self.template('app/main/session-dropdown.directive.js', 'app/main/session-dropdown.directive.js', { appName: self.appName });
            self.src.copy('app/main/session-dropdown.html', 'app/main/session-dropdown.html');

            self.src.copy('app/main/translations.en.json', 'app/main/translations.en.json');
            self.src.copy('app/main/translations.fr.json', 'app/main/translations.fr.json');
            self.src.copy('app/main/translations.nl.json', 'app/main/translations.nl.json');

            self.dest.mkdir('app/main/getting-started');
            self.template('app/main/getting-started/getting-started.controller.js', 'app/main/getting-started/getting-started.controller.js', { appName: self.appName });
            self.src.copy('app/main/getting-started/getting-started.html', 'app/main/getting-started/getting-started.html');
            self.template('app/main/getting-started/getting-started.state.js', 'app/main/getting-started/getting-started.state.js', { appName: self.appName });
        }
    },

    end: function () {
        var self = this,
            done = self.async();

        self.log(clc.green('   create') + ' theme (' + clc.cyan(self.themeName) + ')');
        self.npmInstall([self.themeName], {}, function() {
            self.npmInstall(['grunt',
                             'grunt-contrib-connect',
                             'grunt-contrib-jshint',
                             'grunt-contrib-watch',
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
