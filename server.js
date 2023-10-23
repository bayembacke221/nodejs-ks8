 var http= require('http');

 var handlerRequest = function(request, response){
     console.log('New request to: ' + request.url);
     response.writeHead(200, {'Content-Type': 'text/plain'});
     response.end('Hello World\n');
 }

 var www =http.createServer(handlerRequest);

 www.listen(8080)