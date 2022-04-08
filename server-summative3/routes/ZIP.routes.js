let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    // uuidv4 = require('uuid/v4'),
    router = express.Router();

// ==========================Comment model==========================
let Comment = require('../models/comment');

router.get("/comments/:postID", function (req, res) {
    Comment.find({ postID: req.params.postID }).populate('userID').sort({createTime: -1})
    .then((response) => {
      res.json(response);
    });
  });
  router.delete("/delete-comment-by-id/:id", function (req, res) {
    Comment.deleteOne({ _id: req.params.id }).then((response) => {
        res.status(200).json({
            message: "delete one comment successfully! ",
        });
    });
  });
  //delete-comment-by-postID
  router.delete("/delete-comment-by-postID/:id", function (req, res) {
    Comment.deleteMany({postID: req.params.id}).then((response) => {
        res.status(200).json({
            message: "delete many comment successfully! ",
        });
    });
  });

  router.post('/add-comment', function (req, res) {
    // Comment.init()
	var newComment = new Comment();
	var theFormData = req.body;
	console.log('>>> ', theFormData);

	Object.assign(newComment, theFormData);

	newComment.save().then((response) => {
		return res.json(response);
	});
});

router.patch('/update-comment/:id', function (req, res) {
    // Comment.init()
	let newComment = req.body.comment;
    let newTime = req.body.updateTime;

	console.log('>>> ', req.body);
    console.log('newComment ', newComment);
    console.log('req.body.updateTime ', req.body.updateTime);
    console.log('newTime ', newTime);

	Comment.findByIdAndUpdate(req.params.id, {  comment: newComment , updateTime: newTime }, { new: true })
    .then((response) => {res.json(response);})
    .catch((error) => {res.json({ success: false, error: error });});

});


// =========================user model==========================
let User = require('../models/ZIPuser');
router.get("/login-by-email/:email", (req, res, next) => {
    User.find({ email: req.params.email }).then(data => {
        res.status(200).json({
            message: "user info retrieved successfully!  ok---",
            users: data
        });

    });
});

// =========================animals model==========================
let Animal = require('../models/animal');
router.get("/animals", (req, res, next) => {
    Animal.find().populate('userID').then(data => {
        res.status(200).json({
            message: "animals list retrieved successfully!  ok---",
            animals: data
        });
    });
});

router.get("/animals-category/:name", function (req, res) {
  
    Animal.find({ category: req.params.name }).populate('userID').then((response) => {
        res.status(200).json({
            message: "post detail retrieved successfully!  ok---",
            post_detail: response
        });
    });
  });

router.get("/animals-detail/:postID", function (req, res) {
  
    Animal.findOne({ _id: req.params.postID }).populate('userID').then((response) => {
        res.status(200).json({
            message: "post detail retrieved successfully!  ok---",
            post_detail: response
        });
    });
  });

router.get("/profile/:userID", function (req, res) {
    Animal.find({ userID: req.params.userID }).populate('userID').then((response) => {
        res.status(200).json({
            message: "profile retrieved successfully!  ok---",
            profile: response
        });
    });
  });

  router.delete("/delete-animals/:id", function (req, res) {
    Animal.deleteOne({ _id: req.params.id }).then((response) => {
        res.status(200).json({
            message: "delete animal successfully! ",
            delete_animals: response
        });
    });
  });
  


//catch error path
router.get("/*", (req, res, next) => {
    return res.json({ result: 'hi baby, try other path pls....' });
});


module.exports = router;