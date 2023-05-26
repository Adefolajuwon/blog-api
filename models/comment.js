const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	blog: { type: mongoose.Schema.Types.ObjectId, ref: 'Blog', required: true },
	userInfo: { type: String, required: true },
	comment: { type: String, required: true },
});

module.exports = mongoose.model('Comment', commentSchema);
