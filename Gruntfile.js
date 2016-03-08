module.exports = function(grunt) { 'use strict';

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var config = {
    dest: 'css',
    src: 'scss'
  };

  grunt.initConfig({
    config: config,

    watch: {
      sass: {
        files: [
          '<%= config.src %>/{,*/}*.{scss,sass}'
        ],
        tasks: ['build']
      }
    },

    sass: {
      options: {
        sourcemap: true,
        includePath: '<%= config.src %>'
      },
      src: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>',
          src: ['*.{scss,sass}'],
          dest: '<%= config.dest %>',
          ext: '.css'
        }]
      }
    },

    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: '<%= config.dest %>/',
          src: ['*.css', '!*.min.css'],
          dest: '<%= config.dest %>/',
          ext: '.min.css'
        }]
      }
    }
  });

  grunt.registerTask('build', [
    'sass',
    'cssmin'
  ]);

  grunt.registerTask('develop', [
    'sass',
    'watch'
  ]);

  grunt.registerTask('default', [
    'develop'
  ]);

};
