let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    // uuidv4 = require('uuid/v4'),
    router = express.Router();

// ==========================Comment model==========================
let Comment = require('../models/comment');

//get all comment


router.get("/comments/:postID", function (req, res) {

    Comment.find({ postID: req.params.postID }).populate('userID').then((response) => {
      res.json(response);
    });
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


//catch error path
router.get("/*", (req, res, next) => {
    return res.json({ result: 'hi baby, try other path pls....' });
});


module.exports = router;