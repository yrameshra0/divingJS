module.exports = function(grunt) {
  // Do grunt-related things in here
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.initConfig({

    // Configure mochaTest Task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          captureFile: 'results.txt', //optionally capture the reported output
          quiet: false, //optionally supress output to standard out (defaults to false)
          clearRequireCache: false, //optionally clear the require cache before running tests (defaults to false)
        },
        src: ['test/**/*.js', '!test/qunitTests/**/*.js', './nodeexpresseg/test/**/*.js', './user-authorization/test/**/*.js', './express-rest-eg/test/*.js', 'feature-toggle/test/*.js']
      }
    },

    // Configure jshint Task
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js', './guestlisteg/src/**/*.js', './guestlisteg/test/**/*.js', './guestlistbackboneeg/src/**/*.js', './guestlistbackboneeg/src/**/*.js', '!test/qunitTests/bower_components/**/*.js', 'nodeexpresseg/*.js', 'nodeexpresseg/test/**/*.js', 'user-authorization/**/*.js', 'loggingexpresseg/*.js', 'loggingexpresseg/test/*.js', 'express-rest-eg/*.js', 'express-rest-eg/test/*.js', 'feature-toggle/*.js', 'feature-toggle/test/*.js'],
      options: {

      }
    },

    // Configuring Browserify
    browserify: {
      dist: {
        files: {
          './guestlisteg/public/app.js': ['./guestlisteg/src/*.js'],
          './guestlistbackboneeg/public/app.js': ['./guestlistbackboneeg/src/*.js']
        }
      },
      options: {
        banner: '//*************** ENJOYING JAVASCRIPT DIVING ***************'
      }
    },

    // QUnit
    qunit: {
      all: ['./guestlisteg/test/*.html', './test/qunitTests/*.html']
    }

  });

  grunt.registerTask('default', ['jshint', 'mochaTest', 'qunit']);
  grunt.registerTask('install', 'browserify');
};