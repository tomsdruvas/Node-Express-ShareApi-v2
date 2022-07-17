const mongoose = require('mongoose');
const { Schema } = mongoose;


const ShareDataDailySchema = new Schema({
    shareItem: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ShareItem',
        required: [true, 'Share data must have ShareItem association']
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