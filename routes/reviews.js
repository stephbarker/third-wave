// require modules

const express = require('express');
const router = express.Router();
const reviewsCtrl = require ('../controllers/reviews');

// define route
router.post('/movies/:id/reviews', reviewsCtrl.create);

// export
module.exports = router;