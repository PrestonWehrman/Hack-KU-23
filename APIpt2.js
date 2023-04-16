
const bodyParser = require('body-parser');


// Parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

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

// Start server
app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});