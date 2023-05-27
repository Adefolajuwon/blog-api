require('dotenv').config();
const connection = process.env.MONGODB_URI;

const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
	console.log('Mongoose connection started....');
});

mongoose.connection.on('error', (e) => {
	console.log('Mongoose connection failed......' + e);
});
async function startMongoose() {
	await mongoose.connect(connection);
}

module.exports = { startMongoose, mongoose };
