const User = require('../models/users.model');
const sha1 = require('sha1');

class UsersController {
	static getUsers(req, res) {
		User.find((err, results) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json(results);
			}
		});
	}

	static postUser(req, res) {
		const password = sha1(req.body.password);
		req.body.password = password;
		User.create({ ...req.body }, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(201).json({ message: 'user created' });
			}
		});
	}

	static deleteUser(req, res) {
		const id = req.params.id;
		User.findByIdAndDelete(id, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json({ message: `user ${id} deleted` });
			}
		});
	}

	static updateUser(req, res) {
		const id = req.params.id;
		if (req.body.password) {
			const password = sha1(req.body.password);
			req.body.password = password;
		}
		const update = { ...req.body };
		User.findByIdAndUpdate(id, update, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json({ message: `user ${id} updated` });
			}
		});
	}
}

module.exports = UsersController;
