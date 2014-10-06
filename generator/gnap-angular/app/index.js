'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var GnapGenerator = yeoman.generators.Base.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var self = this;
        var done = self.async();

        self.log(yosay(
            'Welcome to the outstanding GNaP generator!'
        ));

        self.inputRequired = function(input, inputName) {
            if (input)
                return true;

            return inputName + ' is required!';
        };

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
            /*{ 
                name: 'GNaP.Themes.Web.GNaP',
                value: 'gnap-theme-gnap'
            },*/
            {
                name: 'GNaP.Themes.Web.GNaP.Angular',
                value: 'gnap-theme-gnap-angular'
            }],
            default: 'gnap-theme-gnap-angular',
            validate: function (input) { return inputRequired(input, 'Theme'); }
        }];

        self.prompt(prompts, function (props) {
            this.appName = props['app-name'];
            this.appTitle = props['app-title'];
            this.themeName = props['theme-name'];

            this.config.set('app-name', this.appName);
            this.config.set('app-title', this.appTitle);
            this.config.set('theme-name', this.themeName);

            done();
        }.bind(self));
    },

    writing: {
        app: function () {
            var self = this;

            self.template('_package.json', 'package.json', { appName: self.appName, themeName: self.themeName });
            self.template('start-server.cmd', 'start-server.cmd', { themeName: self.themeName });
            self.template('index.html', 'index.html', { appName: self.appName, themeName: self.themeName });
            
            self.dest.mkdir('app');
            self.template('app/app.config.js', 'app/app.config.js', { appName: self.appName, appTitle: self.appTitle });
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
        },

        projectfiles: function () {
            //this.src.copy('editorconfig', '.editorconfig');
            //this.src.copy('jshintrc', '.jshintrc');
        }
    },

    end: function () {
        var self = this;
        var done = self.async();

        self.log('Installing theme (' + self.themeName + ')');
        self.npmInstall([self.themeName], { }, done);
    }
});

module.exports = GnapGenerator;
