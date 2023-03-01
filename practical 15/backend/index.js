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

app.listen(port, ()=>{ console.log(`http://localhost:${port} in run.`); });