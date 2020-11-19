// require our modules
const mongoose = require('mongoose');

// set up our shortcut variable
const Schema = mongoose.Schema;


const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min:1, max: 5, default: 5}
  }, {
    timestamps: true
  });


const shopSchema = new Schema({
    name: {
        type: String,
    },
    city: {
        type: String
    },
    wifi: {
        type: Boolean,
        default: false
    },
    sizes: {
        type: Boolean,
        default: false
    },
    milkType: {
        type: String
    },
    roastSource: {
        type: Boolean,
        default: false
    },
    seating: {
        type: Boolean,
        default: false
    },
    reviews: [reviewSchema]
}, 
{timestamps: true});


// export the compilation of the schema into a model
module.exports = mongoose.model('Shop', shopSchema);