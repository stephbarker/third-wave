// Require our modules
const express = require('express');
const morgan = require('morgan');
const port = 3000;

// set up the express app
const app = express();

//connect to the DB
require('./config/database');


// configure our settings with .set()
app.set('view engine', 'ejs');

// require the router modules
const indexRouter = require('./routes/index');

// mount our middleware with .use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));


// TODO: mount our routes with .use()
app.use('/', indexRouter);


// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on port ${port}`)
});