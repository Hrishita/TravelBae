const Transportation = require("../../models/transportationModel/index");

/**
 * This function does all the operations on transportation collection
 * @param {*} req : The request passsed as a parameter to the function transportationDB
 * @returns : The function returns the Transportation model
 */

exports.fetchAllTransportation = function (req, res) {
  Transportation.find(function (err, Transportation) {
    if (err) return res.json({ success: false, error: err });
    res.json({ data: Transportation });
  });
};

exports.searchTransportation = function (req, res) {
  Transportation.find(  
    { $or:[{source: req.body.source}, {dest_name: req.body.dest_name},{start_date: req.body.start_date},{return_date:req.body.return_date}] },
    function (err, transportation) {
      if (err) return res.json({ success: false, error: err });
      res.json({ data: transportation });
    }
  );
};
