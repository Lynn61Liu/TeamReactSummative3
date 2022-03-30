## DataName: ZIP 

#### collection 'animals' 
```JavaScript
animal Schema({
    _id: mongoose.Schema.Types.ObjectId,
    images: String,
    category: String,
    description: String,
    postTime: Date,
    updateTime: Date,
    userID:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    titleName:String
}
```
#### collections 'comments' 
```JavaScript
comment Schema({
    _id: mongoose.Schema.Types.ObjectId,
    postID:String,
    comment: String,
    userID:{type:mongoose.Schema.Types.ObjectId, ref:'User'},
    createTime: Date,
    updateTime: Date
}
```
#### collection 'users' 
```JavaScript
user Schema({
    _id: mongoose.Schema.Types.ObjectId,
    userName:String,
    email:String,
    password:String,
    useImg:String,
    userDescription:String,
    serRole:String
}
```

## API get 
1. http://localhost:4000/api/animals 【View all posts】
2. http://localhost:4000/api/animals-detail/:postID【View detail】
3. http://localhost:4000/api/profile/:userID 【View profile】
4. http://localhost:4000/api/login-by-email/:email 【check email】
5. http://localhost:4000/api/comments/:postID 【list all comments】

## API delete
1. http://localhost:4000/api/delete-comment-by-id/:id 【delete one comment】
2. http://localhost:4000/api/delete-comment-by-postID/:postID 【delete many comments】
3. http://localhost:4000/api/delete-animals/:postID【delete one post】



