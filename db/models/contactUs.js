const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.promise = Promise

const contactSchema = new Schema({

    email: { type: String, unique: false, required: false },
    message: { type: String, unique: false, required: false }

})

const Contact = mongoose.model('Contact', contactSchema)
module.exports = Contact