const accommodation = require("../../models/accommodationModel");


// here remove .sort() if you only want to search
exports.searchAccommodation = function (req, res) {
  accommodation.find(
    { hotel_name: { $regex: req.body.hotel_name , $options: "i" } },
    function (err, accommodation) {
      if (err) return res.json({ success: false, error: err });
      res.json({ data: accommodation });
    }
  ).sort({price: req.body.sort_type });
};