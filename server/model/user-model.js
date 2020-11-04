const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shippingSchema = new Schema(
        {
                street1: {type: String},
                street2: {type: String },
                city: {type: String},
                state: {type: String},
                zipcode: {type: String},
        }
)

const billingSchema = new Schema(
        {
                cardNumber: {type: String, required: true},
                expirationDate: {type: String, required: true},
                cvv: {type: String, required: true},
                zipcode: {type: String, required: true}
        }
)

const userSchema = new Schema(
        {
                name: {type: String, required: true},
                email: {type: String, required: true},
                password: {type: String, required: true},
                shipping: [shippingSchema],
                billing: [billingSchema]
        }
)

const User = mongoose.model('users', userSchema);
const Shipping = mongoose.model('shipping', shippingSchema);
const Billing = mongoose.model('billing', billingSchema);

module.exports = {
        User,
        Shipping,
        Billing
};
