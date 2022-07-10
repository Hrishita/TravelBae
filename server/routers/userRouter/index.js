const userRouter = require("express").Router();
const userService = require("../../middleware/userService");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");

/**
 * This router is to create a POST API for userInfo. This API can be tested on Postman
 * with route '/user/userProfile' at the end of the server_url.
 * Upon passing the email, it should return all the information related to the user in the JSON format.
 */

userRouter.post(
  "/userProfile",
  userService.fetchUserProfile
);


userRouter.post(
  "/userProfile",
  userService.updatePassword
);

//Authentication Logic begins here

userRouter.post("/signup", (req, res, next) => {
  console.log("reqyest.....",req);
  bcrypt.hash(req.body.password, 10).then(hash => {
    const user = new User({
      email: req.body.email,
      password: hash,
      lName:req.body.lName,
      fName:req.body.fName
    });

    User.findOne({ email: req.body.email }).then(user1 => {
      if (user1) {
        return res.status(401).json({
          message: "User Already Exist"
        })
      }

      user.save().then(result => {
        if (!result) {
          return res.status(500).json({
            message: "Error Creating USer"
          })
        }
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
    })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });;
  })

});




userRouter.post("/login", (req, res, next) => {
  let fetchedUser;

  User.findOne({ email: req.body.email }).then(user => {
    if (!user) {
      return res.status(401).json({
        message: "Auth failed no such user"
      })
    }
    fetchedUser = user;
    return bcrypt.compare(req.body.password, user.password);
  }).then(result => {
    console.log(fetchedUser)
    if (!result) {
      return res.status(401).json({
        message: "Auth failed inccorect password"
      })
    }
    const token = jwt.sign(
      { email: fetchedUser.email, userId: fetchedUser._id },
      "secret_this_should_be_longer",
      { expiresIn: "1h" }
    );
    res.status(200).json({
      token: token,
      expiresIn: 3600,
      userId: fetchedUser._id
    });
  })
    .catch(e => {
      console.log(e)
    })
})

module.exports = userRouter;
