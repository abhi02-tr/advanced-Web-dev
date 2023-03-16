const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const customerRouter = require('./route/customer');

dotenv.config({path: "./config/.env"});
const port = process.env.PORT;
const monmgoUrl = process.env.mongo_url;

const app = express();

app.use(express.json());

app.use('/api', customerRouter);

mongoose.connect(monmgoUrl, {});
const db = mongoose.connection;

db.on('error', err => { console.error(err); });
db.on('connected', () => {
    console.log('db connected...');
    app.listen(port, ()=>{ console.log(`http://localhost:${port} in run.`); });
})