const http = require('http');
const app = require('.');
require('dotenv').config();
const PORT = process.env.SERVER;
const { startMongoose } = require('./lib/mongoose');

const Port = 3000;
const server = http.createServer(app);

(async function () {
	server.listen(Port, () => {
		console.log(`Server started on PORT ${Port}.....`);
	});
	await startMongoose();
})();
