module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: ['build/js/**/*.js']
    },
    sass: {
      expanded: {
        options: { outputStyle: 'expanded' },
        files: { 'public/css/app.css': 'build/scss/app.scss' }
      },
      compressed: {
        options: { outputStyle: 'compressed' },
        files: { 'public/css/app.min.css': 'build/scss/app.scss' }
      }
    },
    concat: {
          dist: {
            src: ['build/angular/app.js', 'src/js/**/*.js'],
            dest: 'src/js/app.js'
          }
        },
    uglify: {
      'js/app.min.js': 'js/app.js'
    },
    watch: {
          configFiles: {
            files: ['Gruntfile.js', 'package.json'],
            options: { reload: true }
          },
          scss: {
            files: ['build/scss/**/*.scss'],
            tasks: ['sass'],
            options: { livereload: true }
          },
          js: {
            files: ['build/js/**/*.js'],
            tasks: ['jshint', 'concat', 'uglify'],
            options: { livereload: true }
          },
          index: {
            files: ['index.html'],
            options: { livereload: true }
          }
        }
    bower_concat: {
      all: {
        dest: {
          'js': 'src/js/_bower.js',
          'css': 'src/css/scss/_bower.scss'
        },
        mainFiles: {
          bootstrap: [
            'dist/js/bootstrap.js',
            'dist/css/bootstrap.css'
          ]
        },
        dependencies: {
          bootstrap: ["jquery"]
        }
      },
    },
  });

  // require('load-grunt-tasks')(grunt);
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');



  grunt.registerTask('default', ['jshint', 'uglify', 'watch', 'sass', 'bower_concat', 'concat']);

};