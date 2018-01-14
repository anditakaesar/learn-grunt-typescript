module.exports = function (grunt) {
  "use strict";
  //load npm tasks
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks("grunt-contrib-copy");
  grunt.loadNpmTasks('grunt-open');

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      copy: {
        build: {
          files: [
            {
              expand: true,
              cwd: "./public",
              src: ["**"],
              dest: "./dist/public"
            },
            {
              expand: true,
              cwd: "src",
              src: ["**/*.html"],
              dest: "dist/"
            }
          ]
        }
      },
      connect: {
        server: {
          options: {
            hostname: 'localhost',
            protocol: 'http',
            port: 8080,
            base: './dist',
            livereload: true,
            open: true
          }
        }
      },
      typescript: {
          base: {
              src: ['src/**/*.ts'],
              dest: 'dist/js/generated.js',
              options: {
                  module: 'amd',
                  target: 'es5'
              }
          }
      },
      watch: {
        options: {
          livereload: true
        },
        ts: {
          files: '**/*.ts',
          tasks: ['typescript']
        },
        html: {
          files: '**/*.html',
          tasks: ['copy']
        }
      },
      open: {
          dev: {
              path: 'http://localhost:8080/index.html'
          }
      }
  });

  grunt.registerTask('default', ['copy', 'typescript', 'connect', 'open', 'watch']);

}
