const fs = require('fs');

const pathInfo = (path, callback) => {
    fs.stat(path, (error, stats) => {
        info = {};

        info.type = undefined;
        info.path = path;

        if (stats.isFile()) {
            info.type = 'file';
            info.content = fs.readFileSync(path, 'utf8');
        }

        if (stats.isDirectory()) {
            info.type = 'directory';
            info.childs = fs.readdirSync(path);
        }

        callback(error, info);
    });
}

module.exports = pathInfo;
