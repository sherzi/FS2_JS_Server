const port = 80;
const express = require('express') 
const app = express();

const querystring = require('querystring');

try {
  http.createServer(function (req, res) {
 
    res.writeHead(200, {'Content-Type': 'text/html'});
    var queryData = url.parse(req.url, true).query;
    var returnValue = 'ok';
    res.end(returnValue);
  }).listen(port);

  app.listen(port, () => { 
    console.log('ok on ' + port)
  });
}
catch(error) {
  console.error('error: ',error);
}
