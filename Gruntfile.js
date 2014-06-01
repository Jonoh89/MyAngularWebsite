module.exports = function(grunt) {
    grunt.initConfig({
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
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
};