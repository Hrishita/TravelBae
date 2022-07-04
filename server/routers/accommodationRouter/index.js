const accommodationRouter = require("express").Router();
const accommodationService = require("../../middleware/accommodationService/index");

accommodationRouter.post(
  "/fetchAllAccommodation",
  accommodationService.fetchAllAccommodation
);

accommodationRouter.post(
  "/searchAccommodation",
  accommodationService.searchAccommodation
);

accommodationRouter.post(
  "/sortAccommodation",
  accommodationService.searchAccommodation
);

module.exports = accommodationRouter;
