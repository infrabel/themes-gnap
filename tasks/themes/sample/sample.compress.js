module.exports = {
    sample: {
        options: {
            archive: './releases/gnap-theme-sample/sample.zip',
            mode: 'zip'
        },
        files: [{ expand: true, cwd: './deploy/', src: ['**'] }]
    }
};
