const User = require('../models/users.model');
const sha1 = require('sha1');
const mongoError = require('../utils/error/mongoError');
const createSuccess = require('../utils/success/createSuccess');
const deleteSuccess = require('../utils/success/deleteSuccess');
const updateSuccess = require('../utils/success/updateSuccess');
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
	}
}

module.exports = UsersController;
