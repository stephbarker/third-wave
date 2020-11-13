// TODO

// require the mongoose module
const mongoose = require('mongoose');

// set up a shortcut variable (db)
const db = mongoose.connection;

// connect to mongoDB
mongoose.connect('mongodb+srv://admin:abceasyas123@cluster0.quwlv.mongodb.net/third-wave?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

// set up a listener to alert us when we're connected
db.on('connected', function() {
    console.log(`Connected to MongoDB on ${db.host}:${db.port}`);
});

