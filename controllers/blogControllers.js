async function blog(req, res) {
	try {
		const { title, content, authorId } = req.body;
		const blog = await Blog.create({ title, content, author: authorId });
		res.status(201).json(blog);
	} catch (error) {
		res.status(500).json({ error: 'Failed to create blog' });
	}
}
