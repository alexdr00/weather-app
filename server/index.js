const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');

// Importing routes
const weatherServiceRoutes = require('./routes/weatherServiceRoutes');

require('dotenv').config();

const app = express();

// * Middleware *
// body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors
app.use(cors({ origin: '*' }));

app.use(morgan('combined'));

// Applying Routes
weatherServiceRoutes(app);

const port = 5000;

app.listen(port, () => console.log(`Server running on port ${port}.`));
