const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the userSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const itinerarySchema = new mongoose.Schema({
  itinerary_image: { type: String, required: true },
  itinerary_city: { type: String, required: true },
  itinerary_description: { type: String, required: true },
  itinerary_summary: { type: String, required: true },
  tags: [String],
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  itinerary_dur: { type: String, required: true },
  recommended: { type: Boolean, required: true },
});

const Itinerary = mongoose.model("Itinerary", itinerarySchema, "itinerary");

/**
 * The module is being exported as 'User'
 * so that this module can be imported into other modules.
 */
module.exports = Itinerary;

// const mongoose = require("mongoose");
// /**
//  * This constant defines the model structure of the watchGroupSchema that is to be stored in MongoDB.
//  *  The schema declares the data type and requiurement for each field.
//  */
// const itinerarySchema = new mongoose.Schema({
//   author: { type: String },
//   movie_show_id: { type: Number },
//   watchgroup_id: { type: Number },
//   userlist: [String],
// });

// /**
//  * The first param is the name for the "model" for exporting, second param is the schema name, and
//  * the third param is the collection name.
//  */

// const Itinerary = mongoose.model("Itinerary", itinerarySchema, "itinerary");
// /**
//  * The module is being exported as 'WatchGroup'
//  * so that this module can be imported into other modules.
//  */
// module.exports = Itinerary;
