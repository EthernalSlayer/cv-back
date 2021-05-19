const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
	name: { type: String, required: true },
	type: { type: String, required: true },
	new: { type: Boolean, required: true },
});

module.exports = mongoose.model('Skill', SkillSchema);
