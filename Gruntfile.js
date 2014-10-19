if (typeof String.prototype.endsWith != 'function') {
    String.prototype.endsWith = function (str) {
        return this.slice(-str.length) == str;
    };
}

if (typeof String.prototype.startsWith != 'function') {
    String.prototype.startsWith = function (str) {
        return this.slice(0, str.length) == str;
    };
}

module.exports = function (grunt) {
    'use strict';

    grunt.util.linefeed = '\r\n';
    grunt.file.defaultEncoding = 'utf8';

    var config = {
        pkg: grunt.file.readJSON('package.json')
    };

    merge(config, require('./themes.js'));
    merge(config, loadConfig('./tasks/options/', '.js'));

    grunt.file.expand('./tasks/themes/*').forEach(function (dir) {
        merge(config, loadConfig(dir + '/', '.js'));
    });

    merge(config, loadConfig('./custom/', '-grunt.js', '-grunt'));

    //console.log(config);

    grunt.initConfig(config);

    require('load-grunt-tasks')(grunt);

    grunt.loadTasks('./tasks/');
    grunt.loadTasks('./tasks/themes/');
};

function loadConfig(path, extension, marker) {
    var glob = require('glob'),
        object = {},
        key;

    glob.sync('**/*' + extension, { cwd: path }).forEach(function (option) {
        if (marker) {
            key = option.replace(marker, '').split('.').slice(-2, -1);
        } else {
            key = option.split('.').slice(-2, -1);
        }

        if (key in object) {
            object[key] = merge(object[key], require(path + option));
        } else {
            object[key] = require(path + option);
        }
    });

    return object;
}

function merge(to, from) {
    for (var n in from) {
        if (typeof to[n] != 'object') {
            to[n] = from[n];
        } else if (typeof from[n] == 'object') {
            to[n] = merge(to[n], from[n]);
        }
    }

    return to;
};