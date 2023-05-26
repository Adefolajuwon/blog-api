// newLike route handler (likeControllers.js)
const Like = require('../models/likes');
const Blog = require('../models/blog');

async function newLike(req, res) {
	try {
		const blogId = req.params.id;
		const blog = await Blog.findById(blogId);

		if (!blog) {
			return res.status(404).json({ error: 'Blog not found' });
		}

		// Create a new Like document
		const like = await Like.create({ blog: blogId });

		// Update the blog's likes count
		blog.likes += 1;
		await blog.save();

		res.json({ like });
	} catch (error) {
		res.status(500).json({ error: 'Failed to like the blog' });
	}
}

module.exports = { newLike };
