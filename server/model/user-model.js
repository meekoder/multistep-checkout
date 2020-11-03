const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true},
        password: {type: String, required: true},
        address: {type: String}, 
            street1: {type: String},
            street2: {type: String},
            city: {type: String},
            state: {type: String},
            zipcode: {type: String}
        ,
        billing: {type: String},
            cardNumber: {type: String},
            expirationDate: {type: String},
            cvv: {type: String},
            zipcode: {type: String}
    }
)

module.exports = mongoose.model('users', User);
