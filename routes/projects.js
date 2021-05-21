const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/projects.controller');

router
	.get('/', ProjectsController.getProjects)
	.post('/', ProjectsController.postProject)
	.delete('/:id', ProjectsController.deleteProject);

module.exports = router;
