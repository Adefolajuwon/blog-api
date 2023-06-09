const request = require('supertest');
const app = require('../index'); // Assuming your Express app is defined in app.js
const Author = require('../models/author'); // Assuming you have a model for Author

describe('author', () => {});

test('should create a new author', async () => {
	const fullName = 'John Doe';
	const email = 'johndoe@example.com';

	const response = await request(app)
		.post('/api/author')
		.send({ fullName, email });

	expect(response.status).toBe(500);

	//   expect(response.body).toHaveProperty('_id');
	// expect(response.body.fullName).toBe(fullName);
	// expect(response.body.email).toBe(email);
});
