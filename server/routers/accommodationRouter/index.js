const accommodationRouter = require("express").Router();
const accommodationService = require("../../middleware/accommodationService");

accommodationRouter.post(
  "/searchAccommodation",
  accommodationService.searchAccommodation
);
module.exports = accommodationRouter;
