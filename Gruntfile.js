module.exports = function(grunt) {
    grunt.initConfig({
        // Watch for changes
        watch: {
            sass: {
                files: '/assets/scss/**/*.scss',
                tasks: ['sass']
            }
        },
        // Sass config
        sass: {
            dev: {
                files: {
                  'assets/css/style.css': 'assets/scss/style.scss'
                }
            }
        },
        // Reload browser on changes
        browserSync: {
            dev: {
                bsFiles: {
                    src: [
                      './assets/css/*.css',
                      './*.html'
                    ]
                },
                options: {
                    watchTask: true,
                    server: './'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');
    grunt.registerTask('default', ['browserSync', 'watch']);
}
