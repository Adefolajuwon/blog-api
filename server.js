const http = require('http');
const app = require('./index');

const { startMongoose } = require('./lib/mongoose');

const PORT = process.env.PORT || 8080;
const server = http.createServer(app);

(async function () {
	server.listen(PORT, () => {
		console.log(`Server started on PORT ${PORT}.....`);
	});
	await startMongoose();
})();
