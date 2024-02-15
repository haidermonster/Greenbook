const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    'name': {type:String,required:true},
    'contact': Number,
    'email': String,
    'noCopies': Number,
    'postalAddress': Number,
    'message': String
});

const Orders = mongoose.model("Order", orderSchema);

module.exports = Orders;