'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var yosay = require('yosay');

var GnapGenerator = yeoman.generators.NamedBase.extend({
    initializing: function () {
        this.pkg = require('../package.json');
    },

    prompting: function () {
        var self = this;
        var done = self.async();

        self.appName = self.config.get('app-name');

        self.toTitleCase = function (str) {
            return str.replace(/\w\S*/g, function (txt) { return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(); });
        };

        self.escapeRegExp = function(string) {
            return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
        };

        self.replaceAll = function(find, replace, str) {
            return str.replace(new RegExp(self.escapeRegExp(find), 'g'), replace);
        };

        self.inputRequired = function (input, inputName) {
            if (input)
                return true;

            return inputName + ' is required!';
        };

        // stateName: main.test.show
        self.stateName = self['name'].toLowerCase();

        // stateNameCapitalized: MainTestShow
        self.stateNameCapitalized = self.replaceAll(' ', '', self.toTitleCase(self.replaceAll('.', ' ', self.stateName)));

        // stateNameParts: [app, main, test, show]
        self.stateNameParts = self.stateName.split('.');
        self.stateNameParts.splice(0, 0, 'app');

        // stateNameLast: show
        self.stateNameLast = self.stateNameParts[self.stateNameParts.length - 1];

        var prompts = [
            {
                type: 'input',
                name: 'url',
                message: 'What is the url of the state?',
                validate: function (input) { return self.inputRequired(input, 'Url'); },
                default: '/' + self.stateNameLast
            },

            {
                type: 'input',
                name: 'title-english',
                message: 'What is the *english* title of the state?',
                validate: function (input) { return self.inputRequired(input, 'English title'); }
            },

            {
                type: 'input',
                name: 'title-dutch',
                message: 'What is the *dutch* title of the state?',
                validate: function (input) { return self.inputRequired(input, 'Dutch title'); }
            },

            {
                type: 'input',
                name: 'title-french',
                message: 'What is the *french* title of the state?',
                validate: function (input) { return self.inputRequired(input, 'French title'); }
            },

            {
                type: 'confirm',
                name: 'sidebar',
                message: 'Should the state show up in the sidebar?',
                default: false
            }
        ];

        self.prompt(prompts, function (props) {
            this.stateUrl = props['url'].toLowerCase();

            this.stateTitleEnglish = props['title-english'];
            this.stateTitleDutch = props['title-dutch'];
            this.stateTitleFrench = props['title-french'];
            this.stateVisibleInSidebar = props['sidebar'];

            done();
        }.bind(self));
    },

    writing: {
        app: function () {
            var self = this;
            var fullPath = self.stateNameParts.join('/');

            self.dest.mkdir(fullPath);

            self.template('controller.js', fullPath + '/' + self.stateNameLast + '.controller.js',
            {
                appName: self.appName,
                stateNameCapitalized: self.stateNameCapitalized
            });

            self.template('state.html', fullPath + '/' + self.stateNameLast + '.html',
            {
                 stateName: self.stateName
            });

            self.template('state.js', fullPath + '/' + self.stateNameLast + '.state.js',
            {
                appName: self.appName,
                stateName: self.stateName,
                stateNameCapitalized: self.stateNameCapitalized,
                stateNameLast: self.stateNameLast,
                fullPath: fullPath,
                stateUrl: self.stateUrl
            });

            self.template('translations.json', fullPath + '/translations.en.json',
            {
                stateName: self.stateName,
                stateTitle: self.stateTitleEnglish
            });

            self.template('translations.json', fullPath + '/translations.nl.json',
            {
                stateName: self.stateName,
                stateTitle: self.stateTitleDutch
            });

            self.template('translations.json', fullPath + '/translations.fr.json',
            {
                stateName: self.stateName,
                stateTitle: self.stateTitleFrench
            });

            // TODO: Need to check if parent states are present and warn the user if they are not
            // TODO: Update index.html
            // TODO: Update sidebar if self.stateVisibleInSidebar
        }
    },

    end: function () {
    }
});

module.exports = GnapGenerator;
