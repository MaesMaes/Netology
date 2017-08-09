const http = require('http');

let userParams = {
    firstName: 'Pavel',
    lastName: 'Yooo'
};

let options = {
    host: 'netology.tomilomark.ru',
    port: 80,
    path: '/api/v1/hash',
    method: 'POST',
    headers: {
        'Firstname': userParams.firstName,
        'Content-Type': 'application/json'
    }
};

let request = http.request(options, (res) => {
    let data = '';
    res.on('data', function (chunk) {
        data += chunk;
    });
    res.on('end', () => {
        let hash = JSON.parse(data);
        userParams.hash = hash.hash;
        console.log(userParams);
    });
});
request.write(JSON.stringify({'lastName': userParams.lastName}));
request.end();
