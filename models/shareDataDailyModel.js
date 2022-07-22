const mongoose = require('mongoose');
const { Schema } = mongoose;


const ShareDataDailySchema = new Schema({
    shareItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShareItem',
        required: [true, 'Share data must have ShareItem association']
    },
    symbol: {
        type:String,
        required: [true, 'ShareData must have a symbol']
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    },
    data:{
        type:Schema.Types.Mixed
    },
});

module.exports = mongoose.model('shareDataDaily', ShareDataDailySchema);