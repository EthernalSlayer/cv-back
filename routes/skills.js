const express = require('express');
const router = express.Router();
const SkillsController = require('../controllers/skills.controller');

router
	.get('/', SkillsController.getSkills)
	.post('/', SkillsController.postSkill)
	.delete('/:id', SkillsController.deleteSkill)
	.put('/:id', SkillsController.updateSkill);

module.exports = router;
