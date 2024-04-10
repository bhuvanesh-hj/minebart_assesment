// controllers/UserController.js
const { Op } = require("sequelize"); // Import Sequelize operators

const User = require("../models/userModels");
const Address = require("../models/addressModels");
const { Sequelize } = require("sequelize");

exports.registerUser = async (req, res) => {
	try {
		const {
			name,
			email,
			phone,
			pin_code,
			registration_date,
			address,
			password,
		} = req.body;

		const newUser = await User.create({
			name,
			email,
			phone,
			pin_code,
			password,
			registration_date,
		});

		if (address) {
			await Address.create({ ...address, UserId: newUser.id });
		}

		res.status(201).json({ message: "User registered successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

exports.loginUser = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email, password } });

		if (!user) {
			res
				.status(404)
				.json({ message: "User not found or invalid credentials" });
		} else {
			res.status(200).json({ message: "Login successful", user });
		}
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

exports.searchUsers = async (req, res) => {
	try {
		const { name, pin_code, start_date, end_date, page, size } = req.query;
		const offset = (page - 1) * size;

		// Validate input parameters (you can add more validation as needed)
		const whereClause = {};
		if (name) {
			whereClause.name = { [Op.like]: `%${name}%` };
		}
		if (pin_code) {
			whereClause.pin_code = pin_code;
		}
		if (start_date && end_date) {
			whereClause.registration_date = {
				[Sequelize.Op.between]: [start_date, end_date],
			};
		}

		const pageSize = parseInt(size, 10);

		const users = await User.findAndCountAll({
			where: whereClause,
			offset,
			limit: pageSize,
		});

		res.status(200).json(users);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};

function getPermutations(inputString) {
	const perms = []; // Initialize an empty array to store permutations

	// Recursive function to generate permutations
	function backtrack(str, perm) {
		if (perm.length === inputString.length) {
			// If the current permutation is of the same length as the input string,
			// add it to the 'perms' array
			perms.push(perm);
			return;
		}
		for (let i = 0; i < str.length; i++) {
			const char = str[i];
			const remaining = str.slice(0, i) + str.slice(i + 1);
			// Recursively explore all possible choices for the next character
			backtrack(remaining, perm + char);
		}
	}

	// Start the backtracking process with an empty permutation
	backtrack(inputString, "");

	return perms; // Return the array of all permutations
}


exports.permutation = (req, res) => {
	try {
		const { input_string } = req.body;
		if (!input_string) {
			return res.status(400).json({ message: "Input string is required" });
		}
		const permutations = getPermutations(input_string);
		res.status(200).json({ permutations });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};
