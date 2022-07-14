const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the userSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const specificItinerarySchema = new mongoose.Schema({
  itinerary_image: { type: String, required: true },
  itinerary_place: { type: String, required: true },
  itinerary_summary: { type: String, required: true },
  tags: [String],
  duration: { type: Number, required: true },
});

const SpecificItinerary = mongoose.model(
  "SpecificItinerary",
  specificItinerarySchema,
  "specificItinerary"
);

/**
 * The module is being exported as 'User'
 * so that this module can be imported into other modules.
 */
module.exports = SpecificItinerary;
