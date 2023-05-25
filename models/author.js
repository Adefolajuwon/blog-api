const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
	fullName: { type: String, required: true },
	email: { type: String, required: true },
});

module.exports = mongoose.model('Author', authorSchema);
