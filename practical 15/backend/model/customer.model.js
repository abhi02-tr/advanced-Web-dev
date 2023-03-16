const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: { type: String, require: true},
    order: { type: Number }
});

const Customer = mongoose.model("Customer", customerSchema);

module.exports = {Customer};