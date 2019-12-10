const mongoose = require("mongoose"); 

const Schema = mongoose.Schema;

const stockSchema = new Schema ({
    name: { 
        type: String, 
        required: true,
        unique: true
    },
    code: { 
        type: String,
        required: true,
        unique: true },
    stock: { 
        type: Number, 
        required: true },
    price: { 
        type: Number, 
        required: true }
}, {
    timestamps: true
});

const Stock = mongoose.model('Stock', stockSchema);

module.exports = Stock;
// module.exports = stockSchema;