const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    id: {type: String, required: true, unique: true},
}, { timestamps: true });

mongoose.models = {};

module.exports = mongoose.model('Book', BookSchema);