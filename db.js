const mongoose = require('mongoose')
require('dotenv').config()

// const URL = process.env.MONGODB_URL_LOCAL;
const URL = process.env.DB_URL;

// mongoose.connect(URL)
mongoose.connect(URL, {
    ssl: true,
    tls: true,
    socketTimeoutMS: 30000,
});

// Get the default connections
// Mongoose maintain the default connection object representing the mongodb connection
const db = mongoose.connection

// Define event listeners for mongodb connections
db.on('connected', () => console.log('connected to mongodb server'))
db.on('error', (err) => console.log('connection error occure', err))
db.on('disconnected', () => console.log('mongodb connection disconnected '))

module.exports = db



