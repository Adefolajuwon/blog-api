const Message = require('../models/chatModel');

async function sendMessage(req, res) {
	try {
		const { sender, receiver, message } = req.body;

		const sendMessage = new Message({
			sender,
			receiver,
			message,
			timestamp: new Date(),
		});

		await sendMessage.save();

		res.status(200).json({ message: 'Message sent' });
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Failed to send message' });
	}
}

async function getMessage(req, res) {
	try {
		const { sender, receiver } = req.query;
		const query = {
			$or: [
				{ sender, receiver },
				{ sender: receiver, receiver: sender },
			],
		};
		const sort = { timestamp: 1 };
		const messages = await Message.find(query).sort(sort);

		return res.status(200).json(messages);
	} catch (error) {
		return res.status(500).json({ error: 'Failed to retrieve messages' });
	}
}

module.exports = {
	sendMessage,
	getMessage,
};
