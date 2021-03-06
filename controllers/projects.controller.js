const Project = require('../models/projects.model');
const mongoError = require('../utils/error/mongoError');
const createSuccess = require('../utils/success/createSuccess');
const deleteSuccess = require('../utils/success/deleteSuccess');
const updateSuccess = require('../utils/success/updateSuccess');
const validatorResponse = require('../utils/validator/validatorResponse');
const type = 'project';

class ProjectsController {
	static getProjects(req, res) {
		Project.find((err, results) => {
			if (err) {
				mongoError(res, err);
			} else {
				res.status(200).json(results);
			}
		});
	}

	static postProject(req, res) {
		validatorResponse(req, res, () => {
			Project.create({ ...req.body }, (err) => {
				if (err) {
					mongoError(res, err);
				} else {
					createSuccess(res, type);
				}
			});
		});
	}

	static deleteProject(req, res) {
		const id = req.params.id;
		Project.findByIdAndDelete(id, (err) => {
			if (err) {
				mongoError(res, err);
			} else {
				deleteSuccess(res, type, id);
			}
		});
	}

	static updateProject(req, res) {
		validatorResponse(req, res, () => {
			const id = req.params.id;
			const update = { ...req.body };
			Project.findByIdAndUpdate(id, update, (err) => {
				if (err) {
					mongoError(res, err);
				} else {
					updateSuccess(res, type, id);
				}
			});
		});
	}
}

module.exports = ProjectsController;
