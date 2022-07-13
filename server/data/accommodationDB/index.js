const accommodation = require("../../models/accommodationModel");

// here remove .sort() if you only want to search
exports.searchAccommodation = async function (req, res) {
  // const page = req.body.pageNo;
  // const limit = req.body.count;

  var tag = req.body.tags.tags;
  if (tag == undefined || Object.keys(tag).length === 0) {
    tag = ["2 Star", "1 Star", "3 Star", "4 Star", "5 Star"];
  }

  // const count = await accommodation.countDocuments({
  //   hotel_name: { $regex: req.body.hotel_name, $options: "i" },
  //   Rating: { $in: tag },
  // });

  accommodation
    .find(
      {
        hotel_name: { $regex: req.body.hotel_name, $options: "i" },
        Rating: { $in: tag },
      },
      function (err, accommodation) {
        if (err) return res.json({ success: false, error: err });
        res.json({
          data: accommodation,
          // totalPages: Math.ceil(count / limit),
          // currentPage: page,
        });
      }
    )
    .sort({ price: req.body.sort_type })
    // .limit(limit * 1)
    // .skip((page - 1) * limit);
};
