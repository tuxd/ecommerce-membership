module.exports = function(grunt){

    grunt.initConfig({
       jshint: {
           files: ['lib/**/*.js', 'models/**/*.js']
       },
       watch: {
           files: ['<%= jshint.files %>'],
           tasks: ['jshint']
       }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
}