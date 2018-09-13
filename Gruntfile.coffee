# Generated on 2016-12-13 using generator-reveal-infosupport 0.5.13
module.exports = (grunt) ->

    grunt.initConfig
        pkg: grunt.file.readJSON 'package.json'

        watch:
            options:
                livereload: false

            livereload:
                options:
                    livereload: true
                files: [
                    'index.html'
                    'js/*.js'
                    'resources/**'
                ]

            slides:
                files: [
                    'templates/_index.html'
                    'templates/_section.html'
                    'slides/{,*/}*.{md,html}'
                ]
                tasks: ['conventionalBuildIndex']

            coffeelint:
                files: ['Gruntfile.coffee']
                tasks: ['coffeelint']

            jshint:
                files: ['js/*.js']
                tasks: ['jshint']

        connect:

            livereload:
                options:
                    port: 9000
                    # Change hostname to '0.0.0.0' to access
                    # the server from outside.
                    hostname: 'localhost'
                    base: '.'
                    open: true
                    livereload: true

        coffeelint:

            options:
                indentation:
                    value: 4
                max_line_length:
                    level: 'ignore'

            all: ['Gruntfile.coffee']

        jshint:

            options:
                jshintrc: '.jshintrc'

            all: ['js/*.js']

        copy:

            dist:
                files: [{
                    expand: true
                    src: [
                        'slides/**'
                        'bower_components/**'
                        'js/**'
                        'resources/**'
                    ]
                    dest: 'dist/'
                },{
                    expand: true
                    src: ['index.html']
                    dest: 'dist/'
                    filter: 'isFile'
                }]

        markdownpdf:
            labs:
                files:
                    src: "labs/*.md",
                    dest: "dest"

        ts:
            'compile-worksheet':
                tsconfig:
                    tsconfig: 'samples/worksheet/tsconfig.json'
                    passThrough: true
            'compile-sample-messaging':
                tsconfig:
                    tsconfig: 'samples/messaging/tsconfig.json'
                    passThrough: true
            'compile-sample-lib':
                tsconfig:
                    tsconfig: 'samples/compiler-option-lib/tsconfig.json'
                    passThrough: true
            'compile-sample-decorators':
                tsconfig:
                    tsconfig: 'samples/decorators/tsconfig.json'
                    passThrough: true
            'compile-lab-6':
                tsconfig:
                    tsconfig: 'labSolutions/lab6/tsconfig.json'
                    passThrough: true

    # Load all grunt tasks.
    require('./tasks/generate-list')
    require('./tasks/generate-pdf')
    require('load-grunt-tasks')(grunt)

    grunt.registerTask 'conventionalBuildIndex',
            'Generate list by convention and build the index page', [
                'generate-list'
                'buildIndex'
    ]


    grunt.registerTask 'buildIndex',
        'Build index.html from templates/_index.html and slides/list.json.',
        ->
            indexTemplate = grunt.file.read 'templates/_index.html'
            sectionTemplate = grunt.file.read 'templates/_section.html'
            slides = grunt.file.readJSON 'slides/list.json'

            html = grunt.template.process indexTemplate, data:
                slides:
                    slides
                section: (slide) ->
                    grunt.template.process sectionTemplate, data:
                        slide:
                            slide
            grunt.file.write 'index.html', html

    grunt.registerTask 'test',
        '*Lint* javascript and coffee files.', [
            'coffeelint'
            'jshint'
        ]

    grunt.registerTask 'serve',
        'Run presentation locally and start watch process (living document).', [
            'conventionalBuildIndex'
            'connect:livereload'
            'watch'
        ]

    grunt.registerTask 'dist',
        'Save presentation files to *dist* directory.', [
            'test'
            'buildIndex'
            'copy'
        ]



    # Define default task.
    grunt.registerTask 'default', [
        'test'
        'serve'
    ]
