// require our modules
const mongoose = require('mongoose');

// set up our shortcut variable
const Schema = mongoose.Schema;


// intitialize our flightschema
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
    hours: {
        type: Number
    }
}, 
{timestamps: true});


// export the compilation of the schema into a model
module.exports = mongoose.model('Shop', shopSchema);