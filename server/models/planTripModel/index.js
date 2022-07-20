/**
 * Author: Nishit Mistry and Smriti Mishra
 * Description: Defines model structure of the planedTripSchema
 */
const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the planedTripSchema that is to be stored in MongoDB.
 * The schema declares the data type and requiurement for each field.
 * The schema also defines the default value for each field.
 * The commentSchema is passed to the blogSchema as a sub-document.
 */

const accommodationSchema = new mongoose.Schema({
  hotel_id: { type: String },
  hotel_name: { type: String },
  address: { type: String },
  price: { type: Number },
});

const activitySchema = new mongoose.Schema({
  activity_id: { type: String },
  activity_name: { type: String },
  activity_address: { type: String },
  price: { type: Number },
});

const transportationSchema = new mongoose.Schema({
  source: { type: String, required: true },
  dest_name: { type: String, required: true },
  flight_company: { type: String },
  start_date: { type: Number, required: true },
  return_date: { type: Number },
  trip_type: { type: String, required: true },
  price: { type: Number },
  trip_duration: { type: String },
  flight_company_logo: { type: String },
});

const plannedTripSchema = new mongoose.Schema({
  plan_id: { type: Number, required: true },
  plan_name: { type: String, default: "FunTrip" },
  userID: { type: String, required: true },
  city: { type: String, required: true },
  country: { type: String, required: true },
  start_date: { type: String, required: true },
  end_date: { type: String, required: true },
  is_completed: { type: Boolean, Default: false },
  travel_partner: [String],
  recommended_itineraries: [{ String }],
  accommodation: [accommodationSchema],
  activity: [activitySchema],
  transportation: [transportationSchema],
});

const PlanTrip = mongoose.model("plantrips", plannedTripSchema);

/**
 * The module is being exported as 'PlanTrip'
 * so that this module can be imported into other modules.
 */
module.exports = PlanTrip;
