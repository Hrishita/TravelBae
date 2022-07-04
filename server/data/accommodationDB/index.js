const accommodation = require("../../models/accommodationModel");

// exports.fetchaccommodation = function (req, res) {
//   WatchGroup.findOne(
//     { watchgroup_id: req.body.watchgroup_id },
//     function (err, watchGroup) {
//       if (err) return res.json({ success: false, error: err });

//       res.json({ data: watchGroup });
//     }
//   );
// };

exports.fetchAllAccommodation = function (req, res) {
  accommodation.find(function (err, accommodation) {
    if (err) return res.json({ success: false, error: err });
    res.json({ data: accommodation });
  });
};

exports.searchAccommodation = function (req, res) {
  accommodation.find(
    { hotel_name: { $regex: req.body.hotel_name , $options: "i" } },
    function (err, accommodation) {
      if (err) return res.json({ success: false, error: err });
      res.json({ data: accommodation });
    }
  );
};
