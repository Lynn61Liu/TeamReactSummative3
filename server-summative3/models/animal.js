const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = require('../models/ZIPuser');
const animalSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    images: String,
    category: String,
    description: String,
    postTime: Date,
    updateTime: Date,
    userID:{type:mongoose.Schema.Types.ObjectId, ref:'User'}
}, {
    collection: 'animals'
})
module.exports = mongoose.model('Animal', animalSchema)