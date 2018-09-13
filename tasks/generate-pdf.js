const grunt = require('grunt');
const markdownpdf = require('markdown-pdf');
const fs = require('fs');
const path = require('path');

grunt.task.registerTask('generate-pdfs', 'Generates pdfs from markdown files', function () {
    const done = this.async();
    const dir = './labs';
    const files = fs.readdirSync(dir);

    Promise.all(files.map(file => {
        if (file.substr(file.length - 3) === '.md') {
            return streamToPdf(path.join(dir, file), path.join(dir, file.substr(0, file.length - 3) + '.pdf'));
        } else {
            return Promise.resolve();
        }
    })).then(() => done('Lab files created'));

    function streamToPdf(from, to) {
        return new Promise(resolve => {
            fs.createReadStream(from)
                .pipe(markdownpdf({ highlightCssPath: './bower_components/highlightjs/styles/vs.css' }))
                .pipe(fs.createWriteStream(to)).on('finish', () => {
                    resolve();
                });
        })
    }

});
