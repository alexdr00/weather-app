const express = require('express');
const bodyParser = require('body-parser');

// Importing routes
const weatherServiceRoutes = require('./routes/weatherServiceRoutes');

require('dotenv').config();

const app = express();

// * Middleware *
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Applying Routes
weatherServiceRoutes(app);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));
