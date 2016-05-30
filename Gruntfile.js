module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      src: [
        'build/js/**/*.js',
        '!build/js/_bower.js',
      ]
    },
    bower_concat: {
      all: {
        dest: {
          'js': 'build/js/_bower.js',
          'css': 'build/scss/_bower.scss'
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
        src: [
          'build/js/_bower.js',
          'build/angular/app.js', 
          'build/js/**/*.js'
        ],
        dest: 'public/js/app.js'
      }
    },
    uglify: {
      'public/js/app.min.js': 'public/js/app.js'
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
        tasks: ['concat', 'uglify'], // 'jshint' - removed for the moment
        options: { livereload: true }
      },
      index: {
        files: ['public/index.html'],
        options: { livereload: true }
      }
    },
    replace: {
      production: {
        options: {
          patterns: [{
            match: /app\.js/,
            replacement: 'app.min.js'
          },{
            match: /app\.css/,
            replacement: 'app.min.css'
          }]
        },
        files: [
          { expand: true, flatten: true, src: ['public/index.html'] }
        ]
      },
      development: {
        options: {
          patterns: [{
            match: /app\.min\.js/,
            replacement: 'app.js'
          },{
            match: /app\.min\.css/,
            replacement: 'app.css'
          }]
        },
        files: [
          { expand: true, flatten: true, src: ['public/index.html'] }
        ]
      }
    }
  });

  require('load-grunt-tasks')(grunt); 

  // 'jshint' - removed for the moment
  grunt.registerTask('default', ['bower_concat', 'sass:expanded', 'concat', 'replace:development', 'watch']);
  grunt.registerTask('deploy', ['bower_concat', 'sass:compressed', 'concat', 'uglify', 'replace:production']);

};