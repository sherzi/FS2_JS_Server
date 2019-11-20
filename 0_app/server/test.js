
const http = require('http');
const hostname = 'localhost';
const port = 999;

const server = http.createServer( (req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 res.end('Hello World\n');
});

try {
  server.listen(port, hostname, () => {
    console.log('http://${hostname}:${port}/' + 'ok'); 
  });
}
catch(error) {
  console.error('error: ',error)
}
