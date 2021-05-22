const express = require('express');
const router = express.Router();
const SkillsController = require('../controllers/skills.controller');

const skillsPostValidator = require('../utils/validator/skillsPostValidator');
const skillsPutValidator = require('../utils/validator/skillsPutValidator');

const checkAccessToken = require('../utils/authentication/checkAccessToken');

router
	.get('/', SkillsController.getSkills)
	.post(
		'/',
		[checkAccessToken, skillsPostValidator],
		SkillsController.postSkill
	)
	.delete('/:id', checkAccessToken, SkillsController.deleteSkill)
	.put(
		'/:id',
		[checkAccessToken, skillsPutValidator],
		SkillsController.updateSkill
	);

module.exports = router;
