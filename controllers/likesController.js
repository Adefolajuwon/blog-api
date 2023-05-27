// newLike route handler (likeControllers.js)
const Like = require('../models/likes');
const Blog = require('../models/blog');

async function newLike(req, res) {
	try {
		const id = req.params.id;
		const author = req.body.id;
		const blog = await Blog.findById(id);

		if (!blog) {
			return res.status(404).json({ error: 'Blog not found' });
		} else {
			// Create a new Like document
			const like = await Like.create({ blog: id, author });

			// Update the blog's likes count
			blog.likes += 1;
			await blog.save();

			res.json({ like });
		}
	} catch (error) {
		res.status(500).json({ error: 'Failed to like the blog' });
		console.log(error);
	}
}

module.exports = { newLike };
