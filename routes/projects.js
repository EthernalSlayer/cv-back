const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/projects.controller');
const projectsPostValidator = require('../utils/validator/projectsPostValidator');
const projectsPutValidator = require('../utils/validator/projectsPutValidator');

router
	.get('/', ProjectsController.getProjects)
	.post('/', projectsPostValidator, ProjectsController.postProject)
	.delete('/:id', ProjectsController.deleteProject)
	.put('/:id', projectsPutValidator, ProjectsController.updateProject);

module.exports = router;
