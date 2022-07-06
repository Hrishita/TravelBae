const accommodation = require("../../models/accommodationModel");

// here remove .sort() if you only want to search
exports.searchAccommodation = function (req, res) {
  var tag=req.body.tags.tags;
  if(tag==undefined || Object.keys(tag).length === 0){
    tag=[ '2 Star', '1 Star', '3 Star', '4 Star', '5 Star' ];
  }
  accommodation
    .find(
      { hotel_name: { $regex: req.body.hotel_name, $options: "i" } ,
        Rating : { $in: tag  }
      },
      function (err, accommodation) {
        if (err) return res.json({ success: false, error: err });
        res.json({ data: accommodation });
      }
    )
    .sort({ price: req.body.sort_type });
};