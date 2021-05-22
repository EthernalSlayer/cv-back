const express = require('express');
const router = express.Router();
const SkillsController = require('../controllers/skills.controller');
const skillsPostValidator = require('../utils/validator/skillsPostValidator');
const skillsPutValidator = require('../utils/validator/skillsPutValidator');

router
	.get('/', SkillsController.getSkills)
	.post('/', skillsPostValidator, SkillsController.postSkill)
	.delete('/:id', SkillsController.deleteSkill)
	.put('/:id', skillsPutValidator, SkillsController.updateSkill);

module.exports = router;
