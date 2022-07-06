const accommodationDB = require("../../data/accommodationDB");

exports.searchAccommodation = function (req, res) {
  accommodationDB.searchAccommodation(req, res);
};