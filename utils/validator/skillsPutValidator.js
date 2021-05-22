const { body } = require('express-validator');

module.exports = skillsPutValidator = [
	body('name')
		.optional()
		.notEmpty()
		.isLength({ max: 20 })
		.withMessage('name ne doit pas dépasser 20 charactères'),
	body('type')
		.optional()
		.matches(/\b(?:code|sgbd|tool)\b/g)
		.withMessage('le type doit être code, sgbd ou tool'),
	body('new').optional().isBoolean().withMessage('new doit être un booléen'),
];
