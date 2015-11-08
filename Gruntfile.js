module.exports = function (grunt) {
  // Do grunt-related things in here
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');

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
        src: ['test/**/*js']
      }
    },
    //Configuring Coverage Reporter over mocha
    coverage: {
      options: {
        reporter: 'html-cov',
        //use the quiet flag to supress the mocha console output
        quiet: true,
        //specify a destination file to capture the mocha output (the quiet option does not supress this)
        captureFile: 'coverage.html'
      },
      src: ['test/**/*.js']
    },
    // Configure jshint Task
    jshint: {
      files: ['Gruntfile.js', 'app/**/*.js', 'test/**/*.js'],
      options: {

      }
    }
  });

  grunt.registerTask('default', ['jshint', 'mochaTest']);
};
