const http = require('http');
const app = require('.');
require('dotenv').config();
const PORT = process.env.SERVER;
const { startMongoose } = require('./lib/mongoose');

const Server = 8080 || PORT;
const server = http.createServer(app);

(async function () {
	server.listen(PORT, () => {
		console.log(`Server started on PORT ${Server}.....`);
	});
	await startMongoose();
})();
