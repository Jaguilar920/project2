const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const characterSchema = new Schema({
    Name: { type: String, required: true },
    Race: { type: String, required: true },
    Class: { type: String, required: true },
    Alignment: { type: String, required: true },
    Background: { type: String, required: true },
    Track: Boolean
}, { timestamps: true });


const Character = mongoose.model('Character', characterSchema);


module.exports = Character;
