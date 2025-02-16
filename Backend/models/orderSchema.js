const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    name: String,
    price: Number,
    percent: String,
    isDown: Boolean,
    mode:String
});

module.exports=mongoose.model('Order',orderSchema);