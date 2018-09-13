const grunt = require('grunt');
const fs = require('mz/fs');
const path = require('path');

grunt.task.registerTask('generate-list', 'Generates the list.json based on convention', function () {
    const done = this.async();

    function scan(folder, currentPrefix) {
        return fs.readdir(folder).then(function (files) {
            files = files.filter(function (file) {
                return file !== 'list.json';
            });
            files.sort();
            return Promise.all(files.map(function (file) {
                return fs.stat(path.join(folder, file)).then(function (stat) { return { stat: stat, name: file } });
            }));
        }).then(function (files) {
            const slides = [];
            const promises = [];
            files.forEach(function (file) {
                var fileFullName = file.name;
                if (currentPrefix) {
                    fileFullName = currentPrefix + '/' + fileFullName;
                }
                if (file.stat.isDirectory()) {
                    promises.push(scan(path.join(currentPrefix, folder, file.name), fileFullName));
                } else {
                    slides.push(fileFullName);
                }
            });
            return Promise.all(promises).then(function (subArrays) {
                subArrays.forEach(function (subArray) {
                    slides.push(subArray);
                });
                return slides;
            });
        });
    }

    scan('slides', '').then(function (slides) {
        return fs.writeFile(path.join('slides', 'list.json'), JSON.stringify(slides));
    }).then(function () {
        done();
    }).catch(function (error) {
        done(error);
    });

});
