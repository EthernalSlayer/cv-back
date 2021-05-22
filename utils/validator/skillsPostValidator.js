const { body } = require('express-validator');

module.exports = skillsPostValidator = [
	body('name')
		.notEmpty()
		.isLength({ max: 20 })
		.withMessage('name est requis et ne doit pas dépasser 20 charactères'),
	body('type')
		.notEmpty()
		.matches(/\b(?:code|sgbd|tool)\b/g)
		.withMessage('le type est requis et doit être code, sgbd ou tool'),
	body('new')
		.notEmpty()
		.isBoolean()
		.withMessage('new est requis et doit être un booléen'),
];
