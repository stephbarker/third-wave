// require our model
const Shop = require('../models/shop');

module.exports = {
    create
}

// functions
function create(req, res) {
    Shop.findById(req.params.id, function(err,shop) {
        shop.reviews.push(req.body);
        shop.save(function(err) {
            res.redirect(`/shops/${shop._id}`);
        });
    });
}