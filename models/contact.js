const mongoose = require('mongoose')

//define schema
const ContactSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    mobileNo: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },

},{timestamps: true})

//create callection
const ContactModel = mongoose.model('contact', ContactSchema)
module.exports = ContactModel

