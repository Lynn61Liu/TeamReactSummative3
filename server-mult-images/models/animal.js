const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const animalSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    images: String,
    category: String,
    description: String,
    postTime: Date,
    updateTime: Date,
    userID:String
}, {
    collection: 'animals'
})
module.exports = mongoose.model('Animal', animalSchema)