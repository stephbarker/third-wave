// require our modules
const express = require('express');

// create the router object
const router = express.Router();

// require the controller module to map requests to
const shopsCtrl = require('../controllers/shops');

//routes
router.get('/', shopsCtrl.index);
router.get('/new', shopsCtrl.new);
router.delete('/:id', shopsCtrl.delete);
router.put('/:id', shopsCtrl.update);
router.post('/', shopsCtrl.create);
router.get('/:id/edit', shopsCtrl.edit);
router.get('/:id', shopsCtrl.show)

// export our router object
module.exports = router;