const Comment = require('../models/comment');

async function comment(req, res) {
	try {
		const { blogId, userInfo } = req.body;
		const comment = await Comment.create({ blog: blogId, userInfo });
		res.status(201).json(comment);
	} catch (error) {
		res.status(500).json({ error: 'Failed to create comment' });
	}
}
module.exports = { comment };
