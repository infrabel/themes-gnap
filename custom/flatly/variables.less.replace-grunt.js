module.exports = {
    flatly_variables_less: {
        src: './build/flatly/variables.less',
        dest: './build/flatly/variables.less',
        replacements:
        [
            {
                from: /Lato/g,
                to: 'Alegreya Sans'
            }
        ]
    }
}
