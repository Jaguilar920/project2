const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const characterSchema = new Schema({
    img: {type: String, required: false},
    name: { type: String, required: true },
    race: { type: String, required: true },
    tree: { type: String, required: true },
    level: { type: Number, required: true},
    alignment: { type: String, required: true },
    background: { type: String, required: true },
    track: Boolean
}, { timestamps: true });


const Character = mongoose.model('Character', characterSchema);


module.exports = Character;
