var http = require('http');
var fs = require ('fs');
var url = require ('url');

 console.log("Hello World");
 
 var httpserver = http.createServer(function (req, res) {
 console.log("Requête " + url.parse(req.url).pathname);
  
 if (/[a-zA-Z0-9]*(.html)|(.js)|(.json)$/.test(url.parse(req.url).pathname))
     {
          console.log('fichiers html');
          fs.createReadStream(__dirname+url.parse(req.url).pathname).pipe(res);
     }
     else 
     {
          res.end('Incorrect path');
     }
 }).listen(1337, '127.0.0.1'); 
 