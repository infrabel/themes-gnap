module.exports = {
    gnap: {
        options: {
            archive: './releases/gnap-theme-gnap/gnap.zip',
            mode: 'zip'
        },
        files: [{ expand: true, cwd: './deploy/', src: ['**'] }]
    }
};
