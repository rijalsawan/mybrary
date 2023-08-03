const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    type: { type: String, required: true },
    releaseYear: { type: Number, required: true },
}, { timestamps: true });

mongoose.models = {};

module.exports = mongoose.model('Movie', BookSchema);