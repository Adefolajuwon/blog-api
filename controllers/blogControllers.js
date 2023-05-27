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

		// Check if all author IDs are valid
		// const authorIds = await Author.find({ _id: { $in: authors } }).distinct(
		// 	'_id'
		// );
		// const invalidAuthors = authors.filter(
		// 	(authorId) => !authorIds.includes(authorId)
		// );

		// if (invalidAuthors.length > 0) {
		// 	return res
		// 		.status(400)
		// 		.json({ error: 'Invalid author IDs: ' + invalidAuthors.join(', ') });
		// }

		// Create the blog with the provided data
		const blog = await Blog.create({ title, content, authors });

		res.status(201).json(blog);
	} catch (error) {
		res.status(500).json({ error: 'Unable to create blog' });
		console.log(error);
	}
}
async function ViewCount(req, res) {
	try {
		const blogId = req.body.id;

		// Find the blog by its ID
		const blog = await Blog.findById(blogId);

		if (!blog) {
			return res.status(404).json({ error: 'Blog not found' });
		}

		// Increment the view count
		blog.views += 1;
		await blog.save();

		res.json({ views: blog.views });
	} catch (error) {
		res.status(500).json({ error: 'Unable to increment view count' });
	}
}
module.exports = { blog, ViewCount };
