var fs = require('fs');

fs.unlink('myfiles2.txt', function (err) {
    if (err) throw err;
console.log('File deleted!');
});