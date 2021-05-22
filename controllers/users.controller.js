const User = require('../models/users.model');
const sha1 = require('sha1');
const mongoError = require('../utils/error/mongoError');
const createSuccess = require('../utils/success/createSuccess');
const deleteSuccess = require('../utils/success/deleteSuccess');
const updateSuccess = require('../utils/success/updateSuccess');
const validatorResponse = require('../utils/validator/validatorResponse');
const type = 'user';

class UsersController {
	static getUsers(req, res) {
		User.find((err, results) => {
			if (err) {
				mongoError(res, err);
			} else {
				res.status(200).json(results);
			}
		});
	}

	static postUser(req, res) {
		validatorResponse(req, res, () => {
			if (req.body.password) {
				const password = sha1(req.body.password);
				req.body.password = password;
			}
			User.create({ ...req.body }, (err) => {
				if (err) {
					mongoError(res, err);
				} else {
					createSuccess(res, type);
				}
			});
		});
	}

	static deleteUser(req, res) {
		const id = req.params.id;
		User.findByIdAndDelete(id, (err) => {
			if (err) {
				mongoError(res, err);
			} else {
				deleteSuccess(res, type, id);
			}
		});
	}

	static updateUser(req, res) {
		validatorResponse(req, res, () => {
			const id = req.params.id;
			if (req.body.password) {
				const password = sha1(req.body.password);
				req.body.password = password;
			}
			const update = { ...req.body };
			User.findByIdAndUpdate(id, update, (err) => {
				if (err) {
					mongoError(res, err);
				} else {
					updateSuccess(res, type, id);
				}
			});
		});
	}

	static login(req, res) {
		validatorResponse(req, res, () => {
			const pseudo = req.body.pseudo;
			const hashpass = sha1(req.body.password);
			User.findOne({ pseudo }, (err, results) => {
				if (err) {
					res.status(500).json({ error: err.message });
				} else {
					if (results && results.password === hashpass) {
						res.status(200).json({ message: 'login' });
					} else {
						res.sendStatus(401);
					}
				}
			});
		});
	}
}

module.exports = UsersController;
