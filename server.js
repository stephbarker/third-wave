// Require our modules
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const port = process.env.PORT || 3000;

// set up the express app
const app = express();

//connect to the DB
require('./config/database');


// configure our settings with .set()
app.set('view engine', 'ejs');

// require the router modules
const indexRouter = require('./routes/index');
const shopsRouter = require('./routes/shops');
const reviewsRouter = require('./routes/reviews');

// mount our middleware with .use()
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));
app.use(methodOverride('_method'));

// TODO: mount our routes with .use()
app.use('/', indexRouter);
app.use('/shops', shopsRouter);
app.use('/', reviewsRouter);


// tell the app to listen
app.listen(port, function() {
    console.log(`Express is listening on port ${port}`)
});