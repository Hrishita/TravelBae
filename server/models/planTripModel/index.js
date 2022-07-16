const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the planedTripSchema that is to be stored in MongoDB.
 * The schema declares the data type and requiurement for each field.
 * The schema also defines the default value for each field.
 * The commentSchema is passed to the blogSchema as a sub-document.
 */

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
  accommodation: [{ String }],
  activity: [{ String }],
  transportation: [{ String }],
});

const PlanTrip = mongoose.model("PlanTrip", plannedTripSchema, "plantrips");

/**
 * The module is being exported as 'PlanTrip'
 * so that this module can be imported into other modules.
 */
module.exports = PlanTrip;
