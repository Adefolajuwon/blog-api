const Comment = require('../models/comment');

async function comment(req, res) {
	try {
		const { blogId, userInfo, comment } = req.body;
		const Comments = await Comment.create({ blog: blogId, userInfo, comment });
		res.status(201).json(Comments);
	} catch (error) {
		res.status(500).json({ error: 'Failed to create comment' });
		console.log(error);
	}
}

module.exports = { comment };
