const fs = require('fs');

module.exports = (path, callback) => {
    fs.stat(path, (error, stats) => {
        info = {};

        info.type = undefined;
        info.path = path;

        if (stats.isFile()) {
            fs.readFile(path, {encoding: 'utf8'}, (error, content) => {
                if (error) {
                  callback(error, null);
                } else {
                  info.type = 'file';
                  info.content = content;

                  callback(error, info);
                }
            });
        }

        if (stats.isDirectory()) {
            fs.readdir(path, (error, files) => {
                if (error) {
                  callback(error, null);
                } else {
                  info.type = 'directory';
                  info.childs = files;

                  callback(error, info);
                }
            });
        }

        callback(error, info);
    });
}
