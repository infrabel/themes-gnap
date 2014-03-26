GNaP.Web.Themes
===============

We prefer to standardize on a common layout for all our projects. 

For this reason, we provide our developers with NuGet packages to easily pull in the required organizational theme when they start on a new project.

To maintain these packages, we've setup a Grunt.js build process which gives us the following capabilities:

  * We maintain the raw vendor files for any theme or library we use. This enables us to easily upgrade to newer versions and have a clean diff to see what has changed.

  * We make modifications on the raw files to integrate our custom look and feel.

  * We package up the end result into a NuGet package, ready to be pushed to our internal NuGet feed.

The themes we provide using this build are intended to be consumed by any technology and are not geared towards .NET specifically.
