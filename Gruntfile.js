module.exports = function(grunt){

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					loadPath: ['bower_components/foundation-sites/scss'],
					style: 'compact',
					sourcemap: 'none'
				},
				files: {
					'styles.css': ['assets/scss/styles.scss'],
				}
			}
		},
		uglify: {
			options: {
				mangle: {
					except: ['jQuery', 'foundation'],
				}
			},
			my_target: {
				files: {
					'assets/js/min/vendor.min.js': [
					'bower_components/jquery/dist/jquery.js',
					'bower_components/foundation-sites/dist/js/foundation.js',
					]
				}
			}
		},
		watch: {
			scripts: {
				files: ['assets/js/*.js'],
				tasks: ['uglify'],
				options: {
					interrupt: true,
				},
			},
			sass: {
				files: ['assets/scss/*.scss'],
				tasks: ['sass'],
				options: {
					interrupt: true,
				},
			},
			configFiles: {
				files: ['Gruntfile.js'],
				tasks: ['default'],
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');


	grunt.registerTask('default', ['sass','uglify','watch']);

}