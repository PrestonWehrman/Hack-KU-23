const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Use body-parser middleware to parse request bodies as JSON
app.use(bodyParser.json());

// Use body-parser middleware to parse URL-encoded request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post('/submit', (req, res) => {
  // Access form data from request body
  var start_date = req.body.start_date;
  var start_time = req.body.start_time;
  var end_date = req.body.end_date;
  var end_time = req.body.end_time;
  var name = req.body.name;
  
  console.log(name);
  // Process the form data as needed
  // ...

  // Send response
  res.send('Form submission successful');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});