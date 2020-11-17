// require shop model
const Shop = require('../models/shop');

// set up exports
module.exports = {
    index,
    new: newShop,
    create,
    show,
    update,
    edit,
    delete: deleteShop
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

function show(req,res) {
    Shop.findById(req.params.id, function(err,shop) {
        res.render('shops/show', {shop});
    });
}

function update(req,res) {
        Shop.findByIdAndUpdate(req.params.id, req.body, function(err,shop) {
            res.redirect('/shops'); 
        });      
}

function edit(req,res) {
    Shop.findById(req.params.id, function(err,shop) {
        res.render('shops/edit', {shop});
    });
}

function deleteShop(req,res) {
    Shop.findByIdAndDelete(req.params.id, function(err,shop){
        res.redirect('/shops');
    }); 
  
}