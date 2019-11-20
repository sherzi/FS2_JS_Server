const port = 999;
const express = require('express') 
const app = express();

const http = require('http')
const hostname = 'localhost';
const port = process.argv.slice(2)[0]

const server = http.createServer((req, res) => {
  res.end('Hello World\n'); 
});


try {
    app.get('/', (req, res) => { 
        res.send('Hello World')
      });
      app.listen(port, () => { 
        console.log('ok on ' + port)
      });
      
}
catch(error) {
  console.error('error: ',error)
}
