const http = require('http');

const router = (request, response)=>{
    console.log('new petition!');
    console.log(request.url);
    response.writeHead(201, {'Content-Type': 'text/plain'})
    switch (request.url) {
        case '/Hello':
            response.write('I already know use http from node.js')
            response.end();
            break;
    
        default:
            response.write('Forget, i dont know that you want :(')
            response.end();
            break;
    }
}

http.createServer(router).listen(3000)
console.log('escuchando http en el puerto 3000');