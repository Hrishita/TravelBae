const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the userSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const dayItinerarySchema = new mongoose.Schema({
  itinerary_image: { type: String, required: true },
  day: { type: Number, required: true },
  itinerary_place: { type: String, required: true },
});

const DayItinerary = mongoose.model(
  "DayItinerary",
  dayItinerarySchema,
  "dayItinerary"
);

/**
 * The module is being exported as 'User'
 * so that this module can be imported into other modules.
 */
module.exports = DayItinerary;
