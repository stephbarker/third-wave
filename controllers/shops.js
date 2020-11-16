// require shop model
const Shop = require('../models/shop');

// set up exports
module.exports = {
    index,
    new: newShop,
    create
};

//define the action (functions)

function index(req, res) {
    Shop.find({}, function(err, shops) {
    res.render('shops/index', {shops});
    });   
}

function newShop(req,res) {
    res.render('shops/new');
}

function create(req,res) {
    const shop = new Shop(req.body);
    shop.save(function(err) {
        if(err) return res.redirect('/shops/new');
        console.log(shop);
        res.redirect('/shops');
    });
}