const express = require('express');
const app = express();
const routes = require('./routes/routes');
const bodyParser = require('body-parser');

// const routes = require('./routes/routes.js');
// app.use(express.json());
// app.use((req, res, next) => {
// 	console.log(req.body); // log the request body
// 	next();
// });
// app.use(express.json()); // Add this line to parse JSON bodies

// app.use('/api', routes);
// app.use('/api', bodyParser.json()); // Parse JSON bodies
app.use('/api', routes);

module.exports = app;
