const fs = require('fs');
const conf = {encoding: 'utf8'};
const filePromise = require('./file-promise');

module.exports = dir => {
    return new Promise((done, fail) => {
        fs.readdir(dir, (err, _files) => {
            if (err) {
              fail(err);
            } else {
              let promises = _files.map(file => {
                  return new Promise((done, fail) => {
                      fs.readFile(dir + '/' + file, conf, (error, content) => {
                          if (error) {
                            fail(error);
                          } else {
                            done({
                              name: file,
                              content: content
                            });
                          }
                      });
                  });
              });
              Promise.all(promises)
                  .then((files) => done(files))
                  .catch(err => console.error(err));
            }
        });
    });
}
