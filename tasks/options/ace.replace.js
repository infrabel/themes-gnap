module.exports = {
    ace_map: {
        src: ['./build/ace/js/debug/*.map', './build/ace/js/debug/**/*.map'],
        overwrite: true,
        replacements: [
            {
                from: '..\\\\develop\\\\',
                to: 'develop\\\\'
            }
        ]
    }
};
