const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4001;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, from server side!');
});

// Start the server
app.listen(port, () => {
  console.log(`Congratulations!  The Server is running on http://localhost:${port}`);
});