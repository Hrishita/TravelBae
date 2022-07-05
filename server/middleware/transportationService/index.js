const transportationDB = require("../../data/transportationDB/index");

exports.fetchAllTransportation = function (req, res) {
  transportationDB.fetchAllTransportation(req, res);
};

exports.searchTransportation = function (req, res) {
  transportationDB.searchTransportation(req, res);
};
