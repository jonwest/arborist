const express = require('express');
const app = express();
const logger = require('morgan');

// I probably only care about `tiny` because I should be logging client data from the ingress
app.use(logger('tiny'));

// Components
const tree = require('./components/tree')
app.use('/tree', tree);

module.exports = app;
