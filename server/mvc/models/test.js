const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Test = new Schema ({
    id: { type: Integer, required: true },
    name: { type: String, required: true },
    code: { type: String, required: true },
    desc: { type: String, required: false },
    date: { type: Integer, required: false }
});

module.exports = mongoose.model('Test', Test)
