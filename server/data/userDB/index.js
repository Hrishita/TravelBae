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
  const { currentPassword, newPassword, confirmNewPassword } = req.body;
  const userID = req.user.id;
  let errors = [];
  //Check required fields
  if (!currentPassword || !newPassword || !confirmNewPassword) {
    errors.push({ msg: "Please fill in all fields." });
  }

  //Check passwords match
  if (newPassword !== confirmNewPassword) {
    errors.push({ msg: "New passwords do not match." });
  }

  if (errors.length > 0) {
    res.render("changepassword", {
      errors,
      name: req.user.name,
    });
  } else {
    //VALIDATION PASSED
    //Ensure current password submitted matches
    User.findOne({ _id: userID }).then(user => {
      //encrypt newly submitted password
      bcrypt.compare(currentPassword, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          //Update password for user with new password
          bcrypt.genSalt(10, (err, salt) =>
            bcrypt.hash(newPassword, salt, (err, hash) => {
              if (err) throw err;
              user.password = hash;
              user.save();
            })
          );
          req.flash("success_msg", "Password successfully updated!");
          res.redirect("/dashboard");
        } else {
          //Password does not match
          errors.push({ msg: "Current password is not a match." });
          res.render("changepassword", {
            errors,
            name: req.user.name,
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
