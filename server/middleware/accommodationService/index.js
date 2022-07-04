const accommodationDB = require("../../data/accommodationDB/index");

exports.fetchAllAccommodation = function (req, res) {
  accommodationDB.fetchAllAccommodation(req, res);
};

exports.searchAccommodation = function (req, res) {
  accommodationDB.searchAccommodation(req, res);
};
