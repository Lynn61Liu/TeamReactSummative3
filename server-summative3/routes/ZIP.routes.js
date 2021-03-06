let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
     uuidv4 = require('uuid/v4'),
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
	Object.assign(newComment, theFormData);

	newComment.save().then((response) => {
		return res.json(response);
	});
});

router.patch('/update-comment/:id', function (req, res) {
    // Comment.init()
	let newComment = req.body.comment;
    let newTime = req.body.updateTime;
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

// =========================img model==========================
const DIR = './public/';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, uuidv4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});
let Img = require('../models/Img');
router.post('/upload-images', upload.array('imgCollection', 6), (req, res, next) => {
    const reqFiles = [];
    const url = req.protocol + '://' + req.get('host')
    for (var i = 0; i < req.files.length; i++) {
        reqFiles.push(url + '/public/' + req.files[i].filename)
    }
    const img = new Img({
        _id: new mongoose.Types.ObjectId(),
        imgCollection: reqFiles
    });
    img.save().then(result => {
        res.status(201).json({
            message: "Done upload --!",
            imgCreated: {
                _id: result._id,
                imgCollection: result.imgCollection
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

// =========================animals model==========================
let Animal = require('../models/animal');
router.get("/animals", (req, res, next) => {
    Animal.find().populate('userID').sort({postTime: -1}).then(data => {
        res.status(200).json({
            message: "animals list retrieved successfully!  ok---",
            animals: data
        });
    });
});

router.get("/animals-category/:name", function (req, res) {
    Animal.find({ category: req.params.name }).populate('userID').sort({postTime: -1}).then((response) => {
        res.status(200).json({
            message: "category  retrieved successfully!  ok---",
            animals: response
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
    Animal.find({ userID: req.params.userID }).populate('userID').sort({postTime: -1}).then((response) => {
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

  router.post('/add-animals', function (req, res) {
    // Comment.init()
	var newAnimal = new Animal();
	var theFormData = req.body;
	Object.assign(newAnimal, theFormData);
    console.log('newAnimal',theFormData);

	newAnimal.save().then((response) => {
		return res.json(response);
	});
});


  


//catch error path
router.get("/*", (req, res, next) => {
    return res.json({ result: 'hi baby, try other path pls....' });
});


module.exports = router;