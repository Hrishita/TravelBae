const transportationRouter = require("express").Router();
const transportationService = require("../../middleware/transportationService/index");
/**
 * This router is to create a API for Transportation Information. This API can be tested on Postman
 * with route '/tp/' at the end of the server_url.
 */
 transportationRouter.post("/fetchTransporationByDestination", transportationService.searchTransportation);

 transportationRouter.post("/fetchAllTransporation", transportationService.fetchAllTransportation);


module.exports = transportationRouter;
