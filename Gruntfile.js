module.exports = function(grunt) {      
    
    // Initialize main configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Javascript-files concatenation.
        concat: {
          dist: {
            src: [
                'app/js/*.js'
            ],
            dest: 'build/bundles/output.js',
          }            
        },
        
        // Javascript-files minification.
        uglify: {
          my_target: {
            files: {
              'build/bundles/output.min.js': ['build/bundles/output.js']
            }
          }
        },
        
        // CSS-files minification.
        cssmin: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'build/css/output.css': ['app/css/one.css', 'app/css/two.css']
            }
          }
        },
        
        // Prevent caching *.js files on the client-side.
        replace : {
          dist: {
            options: {
                patterns: [
                    {
                        match: 'TIMESTAMP@@',
                        replacement: '<%= (new Date()).valueOf().toString() %>'
                    }
                ]
            },
            files: [
                {
                    src: [ 'index_min.html' ], 
                    dest: 'build/index.html'
                }
            ]
          }
        }
        
    });
    
    // Declare a list of specific grunt-tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-replace');
    
    // Register a task to use it through shell.
    grunt.registerTask('build-automation', ['concat', 'uglify', 'cssmin', 'replace']);
};