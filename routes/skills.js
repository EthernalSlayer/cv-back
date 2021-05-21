const express = require('express');
const router = express.Router();
const SkillsController = require('../controllers/skills.controller');
const { body } = require('express-validator');

const postValidator = [
	body('name')
		.notEmpty()
		.isLength({ max: 20 })
		.withMessage('name est requis et ne doit pas dépasser 20 charactères'),
	body('type')
		.notEmpty()
		.matches(/\b(?:code|sgbd|tool)\b/gi)
		.withMessage('le type est requis et doit être code, sgbd ou tool'),
	body('new')
		.notEmpty()
		.isBoolean()
		.withMessage('new est requis et doit être un booléen'),
];

const putValidator = [
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

router
	.get('/', SkillsController.getSkills)
	.post('/', postValidator, SkillsController.postSkill)
	.delete('/:id', SkillsController.deleteSkill)
	.put('/:id', putValidator, SkillsController.updateSkill);

module.exports = router;
