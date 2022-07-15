const planTripDB = require("../../data/planTripDB/index");

/**
 * This function is used to return the data of planTripDB. Whenever this function is called,
 * the blog data will be fetched from the mongo and will be returned in json format.
 * @param {*} req  -  The request passsed as a parameter to the function planTripDB
 *
 */

exports.createPlanTrip = function (req, res) {
  planTripDB.createPlanTrip(req, res);
};

exports.fetchAllPlanTrips = function (req, res) {
  planTripDB.fetchAllPlanTrips(req, res);
};

exports.findPlanTripByUserID = function (req, res) {
  planTripDB.findPlanTripByUserID(req, res);
};

exports.deletePlanTripByID = function (req, res) {
  planTripDB.deletePlanTripByID(req, res);
};

exports.updatePlanTripByID = function (req, res) {
  planTripDB.updatePlanTripByID(req, res);
};

/**
 * The module is being exported as planTripService so that this module can be imported into other modules.
 */
