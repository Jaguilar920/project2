const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const characterSchema = new Schema({
    name: { type: String, required: true },
    background: { type: String, required: true },
    track: Boolean
}, { timestamps: true });


const Character = mongoose.model('Character', characterSchema);


module.exports = Character;
