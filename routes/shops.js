// require our modules
const express = require('express');

// create the router object
const router = express.Router();

// require the controller module to map requests to
const shopsCtrl = require('../controllers/shops');

//GET '/' -. give me the homepage
router.get('/', shopsCtrl.index);
router.get('/new', shopsCtrl.new);
router.post('/', shopsCtrl.create)

// export our router object
module.exports = router;