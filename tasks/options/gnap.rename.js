module.exports = {
    gnap_bootstrap_less: {
        files: [
            {
                src: './build/bootstrap/less/bootstrap.less',
                dest: './build/bootstrap/less/bootstrap.orig.less'
            }
        ]
    },
    gnap_flatly_license: {
        files: [
            {
                src: './deploy/flatly/LICENSE',
                dest: './deploy/flatly/LICENSE-Flatly'
            }
        ]
    },
}