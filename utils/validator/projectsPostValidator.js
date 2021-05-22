const { body } = require('express-validator');

module.exports = projectsPostValidator = [
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
