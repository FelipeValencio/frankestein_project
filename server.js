const http = require('http');

// const hostname = process.env.YOUR_HOST || '0.0.0.0'
const port = process.env.PORT || 80

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World');
});

server.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});