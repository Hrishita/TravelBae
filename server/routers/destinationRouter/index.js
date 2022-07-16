const destinationRouter = require("express").Router();
const destinationService = require("../../middleware/destinationService");
/**
 * This router is to create a POST API for insertDestination. This API can be tested on Postman
 * with route '/destination/insertDestination' at the end of the server_url.
 */
 destinationRouter.post("/insertDestination", destinationService.insertDestination);

 destinationRouter.get("/fetchAllDestinations", destinationService.fetchAllDestinations);

 destinationRouter.get("/fetchDestinationByCode/:dest_name", destinationService.fetchDestinationByCode);

 destinationRouter.put("/updateDestinationByCode", destinationService.updateDestinationByCode);

 destinationRouter.post("/fetchFilteredDestinations", destinationService.fetchFilteredDestinations);

module.exports = destinationRouter;
