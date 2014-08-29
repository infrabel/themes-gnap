module.exports = {
    'gnap-angular_map': {
        src: ['./build/gnap-angular/js/debug/*.map', './build/gnap-angular/js/debug/**/*.map'],
        overwrite: true,
        replacements: [
            {
                from: '..\\\\develop\\\\',
                to: 'develop\\\\'
            }
        ]
    }
};
