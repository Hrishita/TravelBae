// References: https://stackoverflow.com/questions/63963246/bcrypt-mongoose-change-user-password
const User = require("../../models/userModel");
const bcrypt = require("bcrypt");

/**
 * This function does all the operations on users collection
 * to find the email that's sent from another function.
 * @param {*} req : The request passsed as a parameter to the function userDB
 * @returns : The function returns the User model
 * associated with the  email foung in the database
 */

exports.fetchUserProfile = function (req, res) {
  const email = req.body.email;
  User.find({ email: email }, function (err, user) {
    if (err) return res.json({ success: false, error: err });
    res.json(user);
  });
};

exports.updatePassword = function (req, res) {
  const { userID, cPassword, nPassword, confPassword } = req.body;
  console.log("request............", req);
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
    //Ensure current password submitted matches
    User.findOne({ email: userID }).then((user) => {
      //encrypt newly submitted password
      bcrypt.compare(cPassword, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          //Update password for user with new password
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
          res.redirect("/userdashboard");
        } else {
          res.json({
            error: "Current password is not a match.",
          });
        }
      });
    });
  }
};

/**
 * The module is being exported as userDB so that
 * this module can be imported into other modules.
 */
// module.exports = userDB;
