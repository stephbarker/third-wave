// require our modules
const express = require('express');

// create the router object
const router = express.Router();

// require the controller module to map requests to
const indexCtrl = require('../controllers/index');

//GET '/' -. give me the homepage
router.get('/', indexCtrl.index)

// export our router object
module.exports = router;