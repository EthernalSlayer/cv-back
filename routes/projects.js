const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/projects.controller');

const projectsPostValidator = require('../utils/validator/projectsPostValidator');
const projectsPutValidator = require('../utils/validator/projectsPutValidator');

const checkAccessToken = require('../utils/authentication/checkAccessToken');

router
	.get('/', ProjectsController.getProjects)
	.post(
		'/',
		[checkAccessToken, projectsPostValidator],
		ProjectsController.postProject
	)
	.delete('/:id', checkAccessToken, ProjectsController.deleteProject)
	.put(
		'/:id',
		[checkAccessToken, projectsPutValidator],
		ProjectsController.updateProject
	);

module.exports = router;
