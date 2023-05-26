const Like = require('../models/likes');
async function newLike(req, res) {
	try {
		const blogId = req.params.id;
		const blog = await Like.findById(blogId);

		if (!blog) {
			return res.status(404).json({ error: 'Blog not found' });
		}

		blog.likes += 1;
		await blog.save();

		res.json(blog);
	} catch (error) {
		res.status(500).json({ error: 'Failed to like the blog' });
	}
}
module.exports = { newLike };
