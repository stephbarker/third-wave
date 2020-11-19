// TODO

// require the mongoose module
const mongoose = require('mongoose');
require('dotenv').config();

// set up a shortcut variable (db)
const db = mongoose.connection;
const MONGODB_URI = process.env.MONGODB_URI;

// connect to mongoDB
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// set up a listener to alert us when we're connected
db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

