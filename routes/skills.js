const express = require('express');
const router = express.Router();
const SkillsController = require('../controllers/skills.controller');

router
	.get('/', SkillsController.getSkills)
	.post('/', SkillsController.postSkills);

module.exports = router;
