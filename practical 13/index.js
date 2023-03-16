const http = require('http');

const server = http.createServer((req, res) => {
  const url = req.url;
  switch(url) {
    case '/':
      res.setHeader('Content-Type', 'text/html');
      res.write('<html><body><h1>Welcome to the homepage!</h1></body></html>');
      break;
    case '/about':
      res.setHeader('Content-Type', 'text/html');
      res.write('<html><body><h1>About Us</h1><p>We are a team of developers who love to code!</p></body></html>');
      break;
    case '/contact':
      res.setHeader('Content-Type', 'text/html');
      res.write('<html><body><h1>Contact Us</h1><p>Feel free to send us an email at contact@example.com.</p></body></html>');
      break;
    default:
      res.setHeader('Content-Type', 'text/html');
      res.write('<html><body><h1>404 Not Found</h1><p>The page you requested could not be found.</p></body></html>');
      res.statusCode = 404;
  }
  res.end();
});
server.listen(3000, () => {
  console.log('Server is running on port 3000.');
});