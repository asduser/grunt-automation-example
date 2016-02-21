module.exports = function(grunt) {      
    
    // Initialize main configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        // Javascript-files concatenation.
        concat: {
          dist: {
            src: [
                'main/app/js/*.js'
            ],
            dest: 'main/build/output.js',
          }            
        },
        
        // Javascript-files minification.
        uglify: {
          my_target: {
            files: {
              'main/build/output.min.js': ['main/build/output.js']
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
              'main/build/output.css': ['main/app/css/one.css', 'main/app/css/two.css']
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
                    expand: true, 
                    flatten: true, 
                    src: [ 'main/index.html' ], 
                    dest: 'main/build/'
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
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'replace']);
};