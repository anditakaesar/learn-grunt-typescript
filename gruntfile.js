module.exports = function (grunt) {
  //load npm tasks
  grunt.loadNpmTasks('grunt-ts');
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
            open: false
          }
        }
      },
      ts: {
          base: {
              src: ['src/**/*.ts', '!node_modules/**'],
              dest: 'dist/js/',
              options: {
                  module: 'amd',
                  target: 'es6',
                  rootDir: './src',
                  outDir: './dist',
                  sourceMap: false
              }
          }
      },
      watch: {
        options: {
          livereload: true
        },
        ts: {
          files: '**/*.ts',
          tasks: ['ts']
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

  grunt.registerTask('default', ['copy', 'ts', 'connect', 'open:dev', 'watch']);

}
