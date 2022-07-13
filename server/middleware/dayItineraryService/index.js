const dayItineraryDB = require("../../data/dayItineraryDB");

/**
 * This function is used to return the data of userDB. Whenever this function is called,
 * the user data will be fetched from the mongo and will be returned in json format.
 * @param {*} req
 * @returns
 */
// function itineraryService(req) {
//   return itineraryDB(req);
// }

exports.fetchDayItinerary = function (req, res) {
    dayItineraryDB.fetchDayItinerary(req, res);
};

/**
 * The module is being exported as userProfileService so that this module can be imported into other modules.
 */
// module.exports = itineraryService;
