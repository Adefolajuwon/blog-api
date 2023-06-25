const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
	sender: {
		type: String,
		required: true,
	},
	receiver: {
		type: String,
		required: true,
	},
	message: {
		type: String,
		required: true,
	},
	timestamp: {
		type: Date,
		required: true,
	},
});

module.exports = mongoose.model('Message', chatSchema);
