module.exports = {
    init_bootstrap: {
        cwd: './raw/bootstrap',
        cmd: 'npm install'
    },

    grunt_bootstrap: {
        cwd: './build/bootstrap',
        cmd: 'grunt dist'
    }
}