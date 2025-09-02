const http = require('http');
const PORT = process.env.PORT || 3000;
const server = http.createServer((_req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello from ECS via CI/CD!\n');
});
server.listen(PORT, () => console.log(`Listening ${PORT}`));
