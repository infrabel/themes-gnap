module.exports = {
    gnap: {
        options: {
            archive: './releases/GNaP.Themes.Web.GNaP/gnap.zip',
            mode: 'zip'
        },
        files: [{ expand: true, cwd: './deploy/', src: ['**'] }]
    }
};
