const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const imgSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    imgCollection: Array
}, {
    collection: 'img'
})
module.exports = mongoose.model('Img', imgSchema)