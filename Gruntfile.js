module.exports = function(grunt) {
       /*
            Grunt installation:
            -------------------
                npm install -g grunt-cli # only once (sudo)
                npm install -g grunt-init # only once (sudo)
                npm init # every project (creates a `package.json` file)

            Project Dependencies:
            ---------------------
                npm install grunt --save-dev
                npm install grunt-contrib-watch --save-dev
                npm install grunt-contrib-sass --save-dev
        */

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		meta: {
		  sassPath: './sass/',
		  cssPath: './css/'
		},
		sass: {
			dev: {
			  options: {
			    style: 'expanded',
			    debugInfo: true,
			    lineNumbers: true
			  },
			  expand: true,
			  files: {
          // '<%= meta.cssPath %>style-old-ie.css': '<%= meta.sassPath %>style-old-ie.scss',
          '<%= meta.cssPath %>style.css': '<%= meta.sassPath %>style.scss'
			  }
			}
		},
		watch: {
			files: ['<%= meta.sassPath %>/**/*.scss'],
			tasks: ['sass']
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default',['watch']);
}
