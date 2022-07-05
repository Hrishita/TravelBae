const Transportation = require("../../models/transportationModel/index");

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
