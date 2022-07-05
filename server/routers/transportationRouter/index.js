const transportationRouter = require("express").Router();
const transportationService = require("../../middleware/transportationService/index");
/**
 * This router is to create a API for Transportation Information. This API can be tested on Postman
 * with route '/transportation/fetchAllFlights' at the end of the server_url.
 * Upon passing the source, destination, travel date, it should return all the information related to the flights in the JSON format.
 */
 transportationRouter.post("/fetchTransporationByDestination", transportationService.searchTransportation);

 transportationRouter.post("/fetchAllTransporation", transportationService.fetchAllTransportation);
 

module.exports = transportationRouter;
