module.exports = {
    bootstrap_less_variables: {
        src: './build/bootstrap/less/variables.less',
        dest: './build/bootstrap/less/variables.less',
        replacements:
        [
            {
                from: /@grid-gutter-width:.*px;/g,
                to: '@grid-gutter-width: 24px;'
            }
        ]
    }
}
