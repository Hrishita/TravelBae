const specificItineraryRouter = require("express").Router();
const specificItineraryService = require("../../middleware/specificItineraryService");
// /**
//  * This router is to create a POST API for userInfo. This API can be tested on Postman
//  * with route '/userInfo/userProfile' at the end of the server_url.
//  * Upon passing the email, it should return all the information related to the user in the JSON format.
//  */

/**
 * This router is to create a POST API for creating the watchGroup according to the specified watchGroupID.
 * This API can be tested on Postman
 * with route '/wg/fetchWatchGroupID' at the end of the server_url.
 */
 specificItineraryRouter.post(
  "/fetchSpecificItineraries",
  specificItineraryService.fetchSpecificItineraries
);

/**
 * The module is being exported as router
 * so that this module can be imported into other modules.
 */

module.exports = specificItineraryRouter;
