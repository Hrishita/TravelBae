/**
 * Author: Trushita Maurya
 * This file does all the operations on users collection of Mongo DB
 */
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");

exports.fetchUserProfile = function (req, res) {
  const email = req.body.email;
  User.find({ email: email }, function (err, user) {
    if (err) return res.json({ success: false, error: err });
    res.json(user);
  });
};

exports.updatePassword = function (req, res) {
  const { userID, cPassword, nPassword, confPassword } = req.body;
  let errors = [];

  //Check passwords match
  if (nPassword !== confPassword) {
    errors.push({ msg: "New passwords do not match." });
  }

  if (errors.length > 0) {
    res.json({
      error: "New passwords do not match",
    });
  } else {
    //VALIDATION SUCCESSFUL
    User.findOne({ email: userID }).then((user) => {
      bcrypt.compare(cPassword, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(nPassword, salt, (err, hash) => {
              if (err) throw err;
              user.password = hash;
              user.save();
            })
          );

          res.json({
            error: "",
            message: "Password successfully updated!",
          });
        } else {
          res.json({
            error: "Current password is not a match.",
          });
        }
      });
    });
  }
};