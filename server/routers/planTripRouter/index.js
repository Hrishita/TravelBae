const planTripRouter = require("express").Router();
const planTripService = require("../../middleware/planTripService");
/**
 * This router is to create a API forplanTrip . This API can be tested on Postman
 */

planTripRouter.post("/createPlanTrip", (req, res) => {
  return planTripService.createPlanTrip(req, res);
});

planTripRouter.post("/fetchAllPlanTrips", planTripService.fetchAllPlanTrips);

planTripRouter.post(
  "/findPlanTripByUserID/:id?",
  planTripService.findPlanTripByUserID
);

planTripRouter.post("/deletePlanTripByID", planTripService.deletePlanTripByID);
planTripRouter.post("/updatePlanTripByID", planTripService.updatePlanTripByID);

module.exports = planTripRouter;
