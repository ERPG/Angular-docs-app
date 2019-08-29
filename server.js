const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();

const apiKey = process.env.API_KEY;

const app = express();
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log('The server started on port 3000 !!!!!!');
});

app.get('/', (req, res) => {
    res.send("<h1 style='text-align: center'>Port is running! 😃</h1>");
});

app.get('/apiKey', (req, res) => {
    if (apiKey) {
        res.status(200).json(apiKey);
    } else {
        res.status(500).json(err);
    }
});
