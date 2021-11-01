const mongoose = require('mongoose');
const Joi = require('joi');

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

const validateCustomer = (customer) => {
    const schema = {
        name: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(50).required(),
        address: Joi.string().required(),
        phone: Joi.string().min(2).required(),
    }
    return Joi.validate (customer, schema);
}


module.exports.Customer = Customer;
module.exports.validate = validateCustomer
