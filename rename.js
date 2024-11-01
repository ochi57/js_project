var fs = require('fs')
fs.rename('myfiles1.txt', 'my renamedfile.txt', function (err) {
    if (err) throw err;
    console.log('file Renamed!');
});