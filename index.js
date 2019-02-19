var httpProxy = require('http-proxy');
var fs = require('fs');

httpProxy.createServer({
  target: {
    host: '109.169.40.128',
    port: 8545
 },
 ssl: {
   key: fs.readFileSync('./key.pem', 'utf8'),
   cert: fs.readFileSync('./server.crt', 'utf8')
 }
}).listen(9070);
