const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
  });

// Handle form submission
app.post('/submit', (req, res) => {
    // Access form data from request body
    var start_date = req.body.start-date;
    var start_time = req.body.start-time;
    var end_date = req.body.end-date;
    var end_time = req.body.end-time;
    var name = name;
  
  
    // Process the form data as needed
    // ...
  
    // Send response
    res.send('Form submission successful');
  });
  
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});