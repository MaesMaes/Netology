const fs = require('fs');
const conf = {encoding: 'utf8'};
const filePromise = require('./file-promise');

const showFiles = dir => {
    return new Promise((done, fail) => {
        fs.readdir(dir, (err, _files) => {
            if (err) {
              fail(err);
            } else {
              let files = [];
              _files.forEach(file => {
                  files.push({
                      name: file,
                      content: fs.readFileSync(dir + '/' + file, 'utf8')
                  });
              });
              done(files);
            }
        });
    });
}

module.exports = showFiles;
