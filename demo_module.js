var http = require ('http');
var dt = require ('./myfirstmodule');

http.createServer(function (req, res){
    res.writeHead(200, {'content-Type': 'text/html'});
    res.write("I came to school at:" + dt.myDateTime());
    res.end
}).listen(8080);