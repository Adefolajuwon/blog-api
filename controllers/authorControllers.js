const Author = require('../models/author');

async function author(req, res) {
	try {
		const { fullName, email } = req.body;
		const Email = Author.findOne(email);
		if (!Email) {
			const author = await Author.create({ fullName, email });
			res.status(201).json(author);
		} else {
			res.status(400).json({ error: 'Email already exists' });
		}
	} catch (error) {
		res.status(500).json({ error: 'Unable create author' });
		console.log(error);
	}
}
module.exports = { author };
