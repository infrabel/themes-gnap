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

    var config = { 
        pkg: grunt.file.readJSON('package.json'),
        bake: {
            gnap: {}
        }
    };

    merge(config, loadConfig('./tasks/options/', '.js'));
    merge(config, loadConfig('./custom/', '-grunt.js'));

    //console.log(config);

    grunt.initConfig(config);
    
    require('load-grunt-tasks')(grunt);

    grunt.loadTasks('./tasks/');
    grunt.loadTasks('./tasks/themes/');
};

function loadConfig(path, extension) {
    var glob = require('glob'),
        object = {},
        key;

    glob.sync('**/*' + extension, { cwd: path }).forEach(function (option) {
        key = option.replace(extension, '');
        key = key.split('.').slice(-1);
        
        if (key in object) {
            object[key] = merge(object[key], require(path + option));
        } else {
            object[key] = require(path + option);
        }
    });

    return object;
}

function merge(to, from) {
    for (n in from) {
        if (typeof to[n] != 'object') {
            to[n] = from[n];
        } else if (typeof from[n] == 'object') {
            to[n] = merge(to[n], from[n]);
        }
    }

    return to;
};