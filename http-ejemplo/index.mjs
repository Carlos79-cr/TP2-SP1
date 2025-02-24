import http from 'http';

//crear un servidor HTTP basico
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type' , 'text/plain; charset=UTF-8');
    res.end('¡Hola, Mundo!');
});

//Configurar el servidor para que escuche en el puerto 300
server.listen(3000, '127.0.0.1' , () => {
    console.log('Servidor corriendo en http://127.0.0.1:3000/');
});