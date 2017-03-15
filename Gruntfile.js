/*
	O Gruntfile.js é o arquivo de configuração do Grunt. 
	Nele você vai dizer tudo o que o Grunt deve fazer. 

	--------

	Dentro de grunt.initConfig(), você vai passar as configurações 
	dos plugins instalados no formato de objeto Javascript (JSON).
*/
module.exports = function( grunt ) {
	grunt.initConfig({
		uglify : {
			options : {
		    	mangle : false
		  	},

		  	my_target : {
		    	files : {
		      		'assets/js/main.js' : [ 'assets/_js/scripts.js' ]//Primeiro você passa o destino e depois os arquivos de origem
		    	}
		  	}
		},//uglify
		sass : {
	      	dist : {
		        options : { style : 'compressed' },
		        files : {
		          'assets/css/style.css' : 'assets/_sass/style.sass'
		        }
	      	}
	    }, // sass
	    watch : {
	    	dist : {
		        files : [
		        	'assets/_js/**/*',
		          	'assets/_sass/**/*'
		        ],

		        tasks : [ 'uglify', 'sass' ]
	      	}
	    } // watch
	});

	//Plugins do Grunt
	grunt.loadNpmTasks( 'grunt-contrib-uglify' );//minificar nosso arquivo
	grunt.loadNpmTasks( 'grunt-contrib-sass' );//Compilação do SASS
	grunt.loadNpmTasks( 'grunt-contrib-watch' );//fica “assistindo” os arquivos que serão alterados e executa a task

	//Tarefas que serão executadas
	grunt.registerTask( 'default', [ 'uglify', 'sass' ] );

	// Tarefa para Watch
  	grunt.registerTask( 'w', [ 'watch' ] );
};