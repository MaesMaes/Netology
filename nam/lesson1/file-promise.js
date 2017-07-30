const fs = require('fs');
const conf = {encoding: 'utf8'};

const read = file => {
    return new Promise((done, fail) => {
      fs.readFile(file, conf, (error, content) => {
          if (error) {
            fail(error);
          } else {
            done(content);
          }
      });
    });
};

const write = (file, data) => {
    return new Promise((done, fail) => {
      fs.writeFile(file, data, err => {
          if (err) {
            fail(err);
          } else {
            console.log('File saved.');
            done(file);
          }
      });
    });
};

module.exports = {
    read,
    write
};
