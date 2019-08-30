import * as mongoose from 'mongoose';
const fs = require('fs');
const thereIsDotEnv = fs.existsSync('.env');
if (thereIsDotEnv) {
    require('dotenv').config();
}
interface Ibase extends NodeJS.Global {
    [key: string]: any;
}

(global as Ibase).__base = __dirname + '/server/';

const ap = require('./server/app');
const db = require('./server/db');

ap.get('/', (req, res) => {
    res.send('<h1 style="text-align: center">Port is running! 😃</h1>');
});

const dbURI =
    process.env.DB_URI || 'mongodb://localhost:27017/events-manager-db';
const PORT = process.env.PORT || 3000;

mongoose.connect(dbURI);
ap.listen(PORT, () => console.log(`listening on PORT ${PORT}...`));
