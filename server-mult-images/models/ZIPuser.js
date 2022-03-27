const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ZIPuserSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName:String,
    email:String,
    password:String,
    useImg:String,
    userDescription:String,
    UserRole:String
}, {
    collection: 'ZIPusers'
})
module.exports = mongoose.model('ZIPuser', ZIPuserSchema)