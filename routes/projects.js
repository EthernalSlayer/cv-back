const express = require('express');
const router = express.Router();
const ProjectsController = require('../controllers/projects.controller');
const { body } = require('express-validator');

const postValidator = [
	body('title')
		.notEmpty()
		.isLength({ max: 20 })
		.withMessage('title est requis et ne doit pas dépasser 20 charactères'),
	body('image')
		.optional()
		.matches(/^.+\.(webp)$/gi)
		.withMessage('doit correspondre au schema *.webp'),
	body('new')
		.notEmpty()
		.isBoolean()
		.withMessage('new est requis et doit être un booléen'),
	body('description')
		.notEmpty()
		.isLength({ max: 100 })
		.withMessage(
			'description est requis et ne doit pas contenir plus de 100 charactères'
		),
	body('tasks')
		.notEmpty()
		.isLength({ maw: 250 })
		.withMessage('tasks est requis et doit contenir moins de 250 charactères'),
];

const putValidator = [
	body('title')
		.optional()
		.notEmpty()
		.isLength({ max: 20 })
		.withMessage('title ne doit pas dépasser 20 charactères'),
	body('image')
		.optional()
		.matches(/^.+\.(webp)$/gi)
		.withMessage('doit correspondre au schema *.webp'),
	body('new')
		.optional()
		.notEmpty()
		.isBoolean()
		.withMessage('new doit être un booléen'),
	body('description')
		.optional()
		.notEmpty()
		.isLength({ max: 100 })
		.withMessage('description ne doit pas contenir plus de 100 charactères'),
	body('tasks')
		.optional()
		.notEmpty()
		.isLength({ maw: 250 })
		.withMessage('tasks doit contenir moins de 250 charactères'),
];

router
	.get('/', ProjectsController.getProjects)
	.post('/', postValidator, ProjectsController.postProject)
	.delete('/:id', ProjectsController.deleteProject)
	.put('/:id', putValidator, ProjectsController.updateProject);

module.exports = router;
