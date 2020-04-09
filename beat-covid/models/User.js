const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    password2: {
        type: String,
        required: true,
    },
    doctor: Boolean,
    dob: {
        type: Date,
        required: true
    },
    address: {
        address_num: String,
        address_street: String,
        address_city: {
            type: String,
            required: true
        },
        address_postal: String,
        address_country: {
            type: String,
            required: true
        }
    },
    phone: String,
    cell: String,
})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);