GNaP.Web.Themes
===============

We prefer to standardize on a common layout for all our projects. 

For this reason, we provide our developers with NuGet packages to easily pull in the required organizational theme when they start on a new project.

To maintain these packages, we've setup a [Grunt.js](http://gruntjs.com/) build process which gives us the following capabilities:

 * We maintain the raw vendor files for any theme or library we use. This enables us to easily upgrade to newer versions and have a clean diff to see what has changed.

 * We make modifications on the raw files to integrate our custom look and feel.

 * We package up the end result into a NuGet package, ready to be pushed to our internal NuGet feed.

The themes we provide using this build are intended to be consumed by any technology and are not geared towards .NET specifically.

## Architecture

![GNaP.Web.Themes Architecture](https://raw.githubusercontent.com/infrabel/GNaP.Web.Themes/master/docs/ArchitectureSmall.png)

## Prerequisites

 * [Node Packaged Modules](https://www.npmjs.org/)
   * To install using [Chocolatey](http://chocolatey.org/) use ```cinst nodejs.install```
   * Alternatively you can [download the Windows installer](http://nodejs.org/download/).

 * [Grunt.js](http://gruntjs.com/)
   * When you have installed NPM, use ```npm install -g grunt-cli```

## Usage

 * Clone the repository.
 * Open a prompt and navigate to the directory you cloned to.
 * Run ```npm install``` to install all required packages.
 * Run ```grunt bake:gnap``` to build an example theme.
 * [Read the documentation](https://github.com/infrabel/GNaP.Web.Themes/wiki) to learn more about the ```taste``` and ```produce``` commands.

## Copyright

Copyright © 2014 Infrabel and contributors.

## License

GNaP.Web.Themes is licensed under [BSD (3-Clause)](http://choosealicense.com/licenses/bsd-3-clause/ "Read more about the BSD (3-Clause) License"). Refer to LICENSE for more information.
