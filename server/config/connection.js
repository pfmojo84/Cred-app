const mongoose = require('mongoose');
require('dotenv').config();

const databaseUrl = process.env.DB_URL;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/jobcred');

module.exports = mongoose.connection;