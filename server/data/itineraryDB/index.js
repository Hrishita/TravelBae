const Itinerary = require("../../models/itineraryModel");
/**
 * This function does all the operations on users collection
 * to find the email that's sent from another function.
 * @param {*} req : The request passsed as a parameter to the function userDB
 * @returns : The function returns the User model
 * associated with the  email foung in the database
 */

exports.fetchRecommendedItineraries = function (req, res) {
  Itinerary.find({ recommended: true }, function (err, itineraries) {
    if (err) return res.json({ success: false, error: err });
    res.json(itineraries);
  });
};

exports.searchByCity = function (req, res) {
  Itinerary.find(
    { itinerary_city: { $regex: req.body.itinerary_city, $options: "i" } },
    function (err, itineraries) {
      if (err) return res.json({ success: false, error: err });
      res.json(itineraries);
    }
  );
};

/**
 * The module is being exported as userDB so that
 * this module can be imported into other modules.
 */
// module.exports = itineraryDB;
