const mongoose = require('mongoose');
const { Schema } = mongoose;

function validator (v) {
    return Number.isFinite(v)
}

const ShareItemSchema = new Schema({
    name: {
        type:String,
        required: [true, 'Share must have a name']
    },
    symbol: {
        type:String,
        required: [true, 'Share must have a symbol']
    },
    price:{
        type: Number,
        require: [true, 'Share must have a price.'],
        validate: [validator, 'This needs to be a Number datatype']
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('shareItem', ShareItemSchema);