const { body } = require('express-validator');

module.exports = projectsPutValidator = [
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
