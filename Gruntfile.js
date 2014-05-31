module.exports = function(grunt) {
    grunt.initConfig({
        concat : {
            libs: {
                src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/bootstrap/dist/js/bootstrap.min.js','bower_components/angular/angular.min.js'],
                dest: 'app/js/libs.js'
            }
        },

        watch: {
            files: ['<%= concat.libs.src %>'],
            tasks: ['concat']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
}