const Profile = require('../models/profileModel.js');
const bcrypt = require('bcrypt');

// async function createProfile(req, res) {
// 	try {
// 		const { firstname, lastname, age, email, password } = req.body;
// 		req.body.password = await bcrypt.hash(req.body.password, 10);

// 		if (
// 			!lastname ||
// 			!firstname ||
// 			!email ||
// 			!age ||
// 			!password ||
// 			!email.endsWith('.com')
// 		) {
// 			res.status(400).json({ error: 'Input all fields' });
// 			return;
// 		} else {
// 			const profile = await Profile.create({
// 				lastname,
// 				firstname,
// 				email,
// 				age,
// 				password,
// 			});

// 			res.status(200).json({ profile });
// 		}
// 	} catch (error) {
// 		console.log(error);
// 		res.status(500).json({ error: 'Unable to create user' });
// 	}
// }

async function createProfile(req, res) {
	try {
		const { firstname, lastname, age, email, password } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);

		if (
			!lastname ||
			!firstname ||
			!email ||
			!age ||
			!password ||
			!email.endsWith('.com')
		) {
			return res
				.status(400)
				.json({ error: 'Please provide all required fields' });
		}

		if (password.length <= 5) {
			return res
				.status(400)
				.json({ error: 'Password should be greater than 5 characters' });
		}

		if (age <= 18) {
			return res.status(400).json({ error: 'Age should be greater than 18' });
		}

		const profile = await Profile.create({
			lastname,
			firstname,
			email,
			age,
			password: hashedPassword,
		});

		return res.status(200).json({ profile });
	} catch (error) {
		console.log(error);
		return res.status(500).json({ error: 'Unable to create user' });
	}
}

async function getProfile(req, res) {
	try {
		const { email } = req.query; // or req.params depending on how you send the parameter
		const profile = await Profile.findOne({ email });
		res.status(200).json(profile);
	} catch (error) {
		console.log(error);
		res.status(500).json({ error: 'Unable to retrieve user profile' });
	}
}

async function editProfile(req, res) {
	try {
		const { username } = req.params;
		const { name, age, email, password } = req.body;

		// Find the user profile
		const userProfile = await Profile.findOne({ username });

		// Check if the user profile exists
		if (!userProfile) {
			return res.status(404).json({ error: 'User profile not found' });
		}

		// Validate password using bcrypt
		const passwordMatch = await bcrypt.compare(password, Profile.password);
		if (!passwordMatch) {
			return res.status(400).json({ error: 'Invalid password' });
		}

		// Update the user profile
		userProfile.name = name;
		userProfile.age = age;
		userProfile.email = email;
		await userProfile.save();

		res.json(userProfile);
	} catch (error) {
		res.status(500).json({ error: 'Failed to update user profile' });
	}
}
module.exports = { createProfile, editProfile, getProfile };
