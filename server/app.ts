const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

mongoose.Promise = global.Promise;

const routesEvents = require('./routes');

const app = express();
const pathPublic = path.join(__dirname + '../public');

app.use(cors());
app.use(express.static(pathPublic));

console.log(`Serving static files from: ${pathPublic}`);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routesEvents);

module.exports = app;
