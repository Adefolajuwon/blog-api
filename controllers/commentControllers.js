const Comment = require('../models/comment');

async function comment(req, res) {
	try {
		const { blog, userInfo, comment } = req.body;
		const Comments = await Comment.create({ blog: blog, userInfo, comment });
		res.status(201).json(Comments);
	} catch (error) {
		res.status(500).json({ error: 'Faileed to create comment' });
		console.log(error);
	}
}

module.exports = { comment };
