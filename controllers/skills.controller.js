const Skill = require('../models/skills.model');
const mongoError = require('../utils/error/mongoError');
const createSuccess = require('../utils/success/createSuccess');
const deleteSuccess = require('../utils/success/deleteSuccess');
const updateSuccess = require('../utils/success/updateSuccess');
const type = 'skill';

class SkillsController {
	static getSkills(req, res) {
		Skill.find((err, results) => {
			if (err) {
				mongoError(res, err);
			} else {
				res.status(200).json(results);
			}
		});
	}

	static postSkill(req, res) {
		Skill.create({ ...req.body }, (err) => {
			if (err) {
				mongoError(res, err);
			} else {
				createSuccess(res, type);
			}
		});
	}

	static deleteSkill(req, res) {
		const id = req.params.id;
		Skill.findByIdAndDelete(id, (err) => {
			if (err) {
				mongoError(res, err);
			} else {
				deleteSuccess(res, type, id);
			}
		});
	}

	static updateSkill(req, res) {
		const id = req.params.id;
		const update = { ...req.body };
		Skill.findByIdAndUpdate(id, update, (err) => {
			if (err) {
				mongoError(res, err);
			} else {
				updateSuccess(res, type, id);
			}
		});
	}
}

module.exports = SkillsController;
