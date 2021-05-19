const Skill = require('../models/skills.model');

class SkillsController {
	static getSkills(req, res) {
		Skill.find((err, results) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json(results);
			}
		});
	}

	static postSkills(req, res) {
		Skill.create({ ...req.body }, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(201).json({ message: 'success' });
			}
		});
	}
}

module.exports = SkillsController;
