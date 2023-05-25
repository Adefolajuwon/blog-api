const 

async function author(req, res) {
	try {
		const { fullName, email } = req.body;
		const author = await Author.create({ fullName, email });
		res.status(201).json(author);
	} catch (error) {
		res.status(500).json({ error: 'Failed to create author' });
	}
}
