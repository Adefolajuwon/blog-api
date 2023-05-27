// async function blog(req, res) {
// 	try {
// 		const { title, content, authorId } = req.body;
// 		const blog = await Blog.create({ title, content, author: authorId });
// 		res.status(201).json(blog);
// 	} catch (error) {
// 		res.status(500).json({ error: 'Failed to create blog' });
// 		console.log(error);
// 	}
// }
const Blog = require('../models/blog');
const Author = require('../models/author');

async function blog(req, res) {
	try {
		const { title, content, authors } = req.body;
		const blog = await Blog.create({ title, content, authors });

		res.status(201).json(blog);
	} catch (error) {
		res.status(500).json({ error: 'Unable to create blog' });
		console.log(error);
	}
}
async function ViewCount(req, res) {
	try {
		const id = req.params.id;

		// Find the blog by its ID
		const blog = await Blog.findById(id);

		if (!blog) {
			return res.status(404).json({ error: 'Blog not found' });
		} else {
			// increase the view count
			blog.views += 1;
			await blog.save();

			res.json({ views: blog.views });
		}
		console.log(id);
	} catch (error) {
		res.status(500).json({ error: 'Unable to increase view count' });
		console.log(error);
	}
}
module.exports = { blog, ViewCount };
