module.exports = function(grunt) { 'use strict';

  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  var config = {
    dev: '.grunt-tmp',
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
        tasks: ['sass:development']
      }
    },

    sass: {
      options: {
        sourcemap: true,
        includePath: '<%= config.src %>'
      },
      development: {
        files: [{
          expand: true,
          cwd: '<%= config.src %>',
          src: ['*.{scss,sass}'],
          dest: '<%= config.dev %>',
          ext: '.css'
        }]
      },
      build: {
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
      build: {
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
    }
  });

  grunt.registerTask('build', [
    'sass:build',
    'cssmin'
  ]);

  grunt.registerTask('develop', [
    'sass:development',
    'watch'
  ]);

  grunt.registerTask('default', [
    'develop'
  ]);

};
