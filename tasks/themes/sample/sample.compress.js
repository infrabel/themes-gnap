module.exports = {
    sample: {
        options: {
            archive: './releases/GNaP.Themes.Web.Sample/sample.zip',
            mode: 'zip'
        },
        files: [{ expand: true, cwd: './deploy/', src: ['**'] }]
    }
};
