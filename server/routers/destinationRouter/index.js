const destinationRouter = require("express").Router();
const destinationService = require("../../middleware/destinationService");
/**
 * This router is to create a POST API for insertDestination. This API can be tested on Postman
 * with route '/destination/insertDestination' at the end of the server_url.
 */
 destinationRouter.post("/insertDestination", destinationService.insertDestination);

 destinationRouter.get("/fetchAllDestinations", destinationService.fetchAllDestinations);

 destinationRouter.get("/fetchDestinationByCode/:dest_code", destinationService.fetchDestinationByCode);

 destinationRouter.get("/fetchDestinationsBySearchText/:dest_name", destinationService.fetchDestinationsBySearchText);

 destinationRouter.put("/updateDestinationByCode", destinationService.updateDestinationByCode);

module.exports = destinationRouter;
