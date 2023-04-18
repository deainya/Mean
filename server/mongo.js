const config = require('./config');
const mongoose = require('mongoose');

const user = config.mongo_user;
const pass = config.mongo_pass;
const host = config.mongo_host;
const port = config.mongo_port;
const db = config.mongo_db;

const url = `mongodb://${user}:${pass}@${host}:${port}/${db}?authSource=admin`;

mongoose.connect(url, {useNewUrlParser: true});
