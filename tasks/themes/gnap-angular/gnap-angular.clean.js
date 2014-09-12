module.exports = {
    'gnap-angular_build': [
        './build/*'
    ],

    'gnap-angular_deploy': [
        './deploy/*',
        '!./deploy/gnap-angular/**',
        './deploy/gnap-angular/*.html',
        '!./deploy/gnap-angular/index.html',
        './deploy/gnap-angular/app/examples/**/*.html',
        '!./deploy/gnap-angular/app/examples/*.html'
    ]
};
