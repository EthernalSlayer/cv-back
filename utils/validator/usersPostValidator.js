const { body } = require('express-validator');

module.exports = usersPostValidator = [
	body('pseudo')
		.notEmpty()
		.isLength({ max: 15 })
		.withMessage('pseudo est requi et doit contenir moins de 16 charactères'),
	body('password')
		.notEmpty()
		.matches(
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z&é"'(\-è_çà)=,;:!$*^ù?./§£µ¨%~#€¤\\{}]{8,32}$/,
			'i'
		)
		.withMessage(
			'password est requis et doit contenir entre 8 et 32 caractères, une majuscule et un chiffre'
		),
];
