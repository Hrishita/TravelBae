const DayItinerary = require("../../models/dayItineraryModel");
/**
 * This function does all the operations on users collection
 * to find the email that's sent from another function.
 * @param {*} req : The request passsed as a parameter to the function userDB
 * @returns : The function returns the User model
 * associated with the  email foung in the database
 */

exports.fetchDayItinerary = function (req, res) {
  DayItinerary.find(
    { itinerary_city: { $regex: req.body.itinerary_city, $options: "i" } },
    function (err, dayItineraries) {
      if (err) return res.json({ success: false, error: err });

      res.json(dayItineraries);
    }
  );
};

/**
 * The module is being exported as userDB so that
 * this module can be imported into other modules.
 */
// module.exports = itineraryDB;
