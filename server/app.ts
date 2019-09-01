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

app.use(bodyParser.json({ limit: '50mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/api', routesEvents);

module.exports = app;
