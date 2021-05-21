const Project = require('../models/projects.models');

class ProjectsController {
	static getProjects(req, res) {
		Project.find((err, results) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json(results);
			}
		});
	}

	static postProject(req, res) {
		Project.create({ ...req.body }, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(201).json({ message: 'success' });
			}
		});
	}

	static deleteProject(req, res) {
		const id = req.params.id;
		Project.findByIdAndDelete(id, (err) => {
			if (err) {
				res.status(500).json({ error: err.message });
			} else {
				res.status(200).json({ message: 'deleted' });
			}
		});
	}
}

module.exports = ProjectsController;
