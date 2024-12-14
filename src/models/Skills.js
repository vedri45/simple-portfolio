const mongoose = require('mongoose');

const SkillSchema = new mongoose.Schema({
    name: { type: String, required: true },
});

const ImageSchema = new mongoose.Schema({
    src: { type: String, required: true },
    caption: { type: String, required: true },
    width: { type: String, required: true },
    height: { type: String, required: true },
});

const Skill = mongoose.model('Skill', SkillSchema);
const Image = mongoose.model('Image', ImageSchema);

module.exports = { Skill, Image };