const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Test = new Schema ({
    id: { type: Number, required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    desc: { type: String, required: false },
    date: { type: Number, required: false }
});

module.exports = mongoose.model('Test', Test)
