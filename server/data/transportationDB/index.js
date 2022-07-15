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

  // if round trip
  if (req.body.return_date)  {
    Transportation.find(
      {
        source: req.body.source.toLowerCase(),
        dest_name: req.body.dest_name.toLowerCase(),
        start_date : {$gte: req.body.start_date},
        return_date: {$lt: req.body.return_date},
      },
      function (err, Transportation) {
        console.log(err, Transportation)
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  } else { // one way trip
    Transportation.find(
      {
        source: req.body.source.toLowerCase(),
        dest_name: req.body.dest_name.toLowerCase(),
        start_date : {$gte: req.body.start_date}
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  }

}
