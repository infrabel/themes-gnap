module.exports = {
    flatly_bootswatch_less: {
        src: './build/flatly/bootswatch.less',
        dest: './build/flatly/bootswatch.less',
        replacements:
        [
            {
                from: /url\("\/\/fonts.googleapis.com\/css\?family=Lato:400,700,400italic"\)/g,
                to: 'url(http://fonts.googleapis.com/css?family=Alegreya+Sans:400,700,400italic)'
            }
        ]
    }
}
