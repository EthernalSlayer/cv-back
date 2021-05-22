const { body } = require('express-validator');

module.exports = loginValidator = [
	body('pseudo')
		.notEmpty()
		.isLength({ max: 15 })
		.withMessage('pseudo est requis'),
	body('password')
		.notEmpty()
		.isLength({ max: 32 })
		.withMessage('password est requis'),
];
