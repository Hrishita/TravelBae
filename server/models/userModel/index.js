const mongoose = require("mongoose");

/**
 * This constant defines the model structure of the userSchema that is to be stored in MongoDB.
 *  The schema declares the data type and requiurement for each field.
 */
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
});

const User = mongoose.model("users", userSchema);
/**
 * The module is being exported as 'User'
 * so that this module can be imported into other modules. 
 */
module.exports = User;
