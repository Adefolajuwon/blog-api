const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema({
	fullName: String,
	email: String,
});

module.exports = mongoose.model('Author', authorSchema);
