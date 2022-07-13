const userDB = require("../../data/userDB");

/**
 * This file is used to return the data of userDB. Whenever this function is called, 
 * the user data will be fetched from the mongo and will be returned in json format.
 * @param {*} req 
 * @returns 
 */


 exports.fetchUserProfile = function (req, res) {
   userDB.fetchUserProfile(req, res);
};



exports.updatePassword = function (req, res) {
  userDB.updatePassword(req, res);
};


/**
 * The module is being exported as userProfileService so that this module can be imported into other modules. 
 */
// module.exports = userProfileService;
