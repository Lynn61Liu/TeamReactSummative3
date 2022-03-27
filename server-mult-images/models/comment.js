const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const commentSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    postID:String,
    comment: String,
    userName: String,
    createTime: Date,
    updateTime: Date
}, {
    collection: 'comments'
})
module.exports = mongoose.model('Comment', commentSchema)