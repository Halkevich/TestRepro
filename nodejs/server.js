const http = require ('http');
const port = '3000',
      host = '127.0.0.1';

http.createServer(function (request, response) {

     response.statusCode = 200;
     response.setHeader =  ('Content-Type', 'Text/plain; charset=utf-8');
     response.end = ('Hello World!')
    
}).listen(port, host, function () {
    console.log('Server running at hhtp://'+ host + ':' + port);
    
})