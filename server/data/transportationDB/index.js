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
   // if both source and destination are entered
  if (req.body.source && req.body.dest_name) {
    Transportation.find(
      {
        source: req.body.source,
        dest_name: req.body.dest_name,
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  }
  // if only source is entered
  else if (req.body.source) {
    Transportation.find(
      {
        source: req.body.source,
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  }
  // if only destination is entered
  else if (req.body.dest_name) {
    Transportation.find(
      {
        dest_name: req.body.dest_name,
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  }
  // if only start date is entered
  else if(req.body.start_date){
    Transportation.find(
      {
        start_date: req.body.start_date,
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  }
  // if only return date is entered
  else if(req.body.return_date){
    Transportation.find(
      {
        return_date: req.body.return_date,
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  }
  // if both start date and return date are entered
  else if(req.body.start_date && req.body.return_date){
    Transportation.find(
      {
        start_date: req.body.start_date,
        return_date: req.body.return_date,
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  }
      // if both source and destination are entered and start date is entered

  else if(req.body.source && req.body.dest_name && req.body.start_date && req.body.return_date){
    Transportation.find(
      {
        source: req.body.source,
        dest_name: req.body.dest_name,
        start_date: req.body.start_date,
        return_date: req.body.return_date,
      },
      function (err, Transportation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: Transportation });
      }
    );
  }
else{
  Transportation.find(  
    // if only destination is entered 
   
    // if only source is entered
    // if only start date is entered
    // if only return date is entered
    // if both start date and return date are entered

    { $or:[{source: req.body.source}, {dest_name: req.body.dest_name},{start_date: req.body.start_date},{return_date:req.body.return_date}] },
    function (err, transportation) {
      if (err) return res.json({ success: false, error: err });
      res.json({ data: transportation });
    }
  );
};
}
