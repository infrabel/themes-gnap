module.exports = {
    gnap_images_png: {
        options: {
            optimizationLevel: 7
        },
        files: [
          {
              expand: true,
              cwd: './build/',
              src: ['**/*.png'],
              dest: './build/',
              ext: '.png'
          }
        ]
    },

    gnap_images_jpg: {
        options: {
            progressive: true
        },
        files: [
          {
              expand: true,
              cwd: './build/',
              src: ['**/*.jpg'],
              dest: './build/',
              ext: '.jpg'
          }
        ]
    },

    gnap_images_gif: {
        options: {
            interlaced: true
        },
        files: [
          {
              expand: true,
              cwd: './build/',
              src: ['**/*.gif'],
              dest: './build/',
              ext: '.gif'
          }
        ]
    }
};
