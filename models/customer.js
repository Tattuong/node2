const mongoose = require('mongoose');


const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 5,
        maxlength: 50,
        require: true
    },
    email: {
        type: String,
        minlength: 5,
        maxlength: 50,
        require: true,
        unique: true
    }, 
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        unique: true,
        required: true
    }

});

const Customer = mongoose.model('Customer', customerSchema);

module.exports.Customer = Customer;
