const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName:String,
    email:String,
    password:String,
    useImg:String,
    userDescription:String,
    UserRole:String
}, {
    collection: 'users'
})
module.exports = mongoose.model('User', userSchema)