const mongoose = require('mongoose');

const likeSchema = new mongoose.Schema({
	// title: { type: String, required: true },
	// content: { type: String, required: true },
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Author',
		required: true,
	},
	likes: { type: Number, default: 0 }, // Add a "likes" field to track the number of likes
});

module.exports = mongoose.model('Like', likeSchema);
