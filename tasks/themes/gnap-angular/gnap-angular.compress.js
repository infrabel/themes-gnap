module.exports = {
    'gnap-angular': {
        options: {
            archive: './releases/GNaP.Themes.Web.GNaP.Angular/gnap-angular.zip',
            mode: 'zip'
        },
        files: [{ expand: true, cwd: './deploy/', src: ['**'] }]
    }
};
