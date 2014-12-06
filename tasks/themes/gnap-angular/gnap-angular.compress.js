module.exports = {
    'gnap-angular': {
        options: {
            archive: './releases/gnap-theme-gnap-angular/gnap-angular.zip',
            mode: 'zip'
        },
        files: [{ expand: true, cwd: './deploy/', src: ['**'] }]
    }
};
