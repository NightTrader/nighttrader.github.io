const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  // Set the root directory to serve files from
  const filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  const extname = path.extname(filePath);

  // Set the content type based on the file extension
  let contentType = 'text/html';
  if (extname === '.css') {
    contentType = 'text/css';
  }

  // Read and serve the file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('File not found');
    } else {
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
