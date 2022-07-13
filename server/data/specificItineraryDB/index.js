const SpecificItinerary = require("../../models/specificItineraryModel");
/**
 * This function does all the operations on users collection
 * to find the email that's sent from another function.
 * @param {*} req : The request passsed as a parameter to the function userDB
 * @returns : The function returns the User model
 * associated with the  email foung in the database
 */

exports.fetchSpecificItineraries = function (req, res) {
  SpecificItinerary.find(
    { itinerary_place: { $regex: req.body.itinerary_place, $options: "i" } },
    function (err, specificItineraries) {
      if (err) return res.json({ success: false, error: err });

      res.json(specificItineraries);
    }
  );
};

// https://stackoverflow.com/questions/26985908/mongoose-query-with-array-parameter
exports.filterItineraries = function (req, res) {
  console.log(req.body.tags);
  SpecificItinerary.find(
    {
      $and: [
        { tags: { $in: req.body.tags } },
        {
          itinerary_place: { $regex: req.body.itinerary_place, $options: "i" },
        },
      ],
    },
    function (err, filterItineraries) {
      if (err) return res.json({ success: false, error: err });

      res.json(filterItineraries);
    }
  );
};

/**
 * The module is being exported as userDB so that
 * this module can be imported into other modules.
 */
// module.exports = itineraryDB;
