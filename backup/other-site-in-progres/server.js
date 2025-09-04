const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url);
  
  if (req.url.endsWith('.html')) {
    const arr = req.url.split('/');
    
    arr.splice(arr.length - 1, 0, 'htmls')
    
    filePath = path.join(__dirname, arr.join('/'));
  } else if (req.url === '/') {
    filePath = path.join(__dirname, '/htmls/index.html');
  }
  // Set the root directory to serve files from
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
