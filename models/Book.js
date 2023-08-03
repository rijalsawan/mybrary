const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    pages: { type: Number, required: true },
    genre: { type: String, required: true },
    cover: { type: String, required: true },
}, { timestamps: true });

mongoose.models = {};

module.exports = mongoose.model('Book', BookSchema);