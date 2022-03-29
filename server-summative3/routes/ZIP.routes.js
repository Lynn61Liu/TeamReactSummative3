let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    // uuidv4 = require('uuid/v4'),
    router = express.Router();

// ==========================Comment model==========================
let Comment = require('../models/comment');

//get all comment


router.get("/comments/:pID", function (req, res) {
    // console.log(req.params.pID);
    Comment.find({ postID: req.params.pID }).then((response) => {
      res.json(response);
      console.log(response);
    });
  });


// =========================user model==========================
let User = require('../models/ZIPuser');
router.get("/login-by-email/:email", (req, res, next) => {
    User.find({ email: req.params.email }).then(data => {
        res.status(200).json({
            message: "Comment list retrieved successfully!  ok---",
            users: data
        });

    });
});

// =========================animals model==========================
let Animal = require('../models/animal');
router.get("/animals", (req, res, next) => {
    Animal.find().populate('userID').then(data => {
        res.status(200).json({
            message: "Comment list retrieved successfully!  ok---",
            animals: data
        });
    });
});

router.get("/animals-detail/:pID", function (req, res) {
    // console.log(req.params.name);
    Animal.findOne({ _id: req.params.pID }).then((response) => {
      res.json(response);
    });
  });

//catch error path
router.get("/*", (req, res, next) => {
    return res.json({ result: 'hi baby, try other path pls....' });
});


module.exports = router;