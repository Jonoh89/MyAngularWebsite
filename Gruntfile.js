module.exports = function(grunt) {
    grunt.initConfig({

        dir: {
            cssFiles: ['bower_components/bootstrap/dist/css/bootstrap.min.css','bower_components/font-awesome/css/font-awesome.min.css', 'app/assets/css/**/*.css','!app/assets/css/**/*.min.css']
        },

        copy: {
            fonts: {
                expand: true,
                cwd: 'bower_components/font-awesome/fonts/',
                src: '**',
                dest: 'app/assets/fonts/'
            }
        },

        concat : {
            libs: {
                src: ['bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/angular/angular.min.js',
                    'bower_components/angular-route/angular-route.min.js',
                    'bower_components/angular-parse/angular-parse.js'],
                dest: 'app/js/libs.js'
            }
        },

        cssmin: {
            combine: {
                files: {
                    'app/assets/css/all.min.css': ['<%= dir.cssFiles %>']
                }
            }
        },

        jshint: {
            files: ['Gruntfile.js', 'app/js/**/*.js','test/**/*.js','!app/js/libs.js']
        },

        watch: {
            libs: {
                files: ['<%= concat.libs.src %>'],
                tasks: ['concat']
            },
            jshint: {
                files: ['<%= jshint.files %>'],
                tasks: ['jshint']
            },
            css: {
                files: ['<%= dir.cssFiles %>'],
                tasks: ['cssmin','copy:fonts']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('build', ['cssmin','copy','concat']);
};