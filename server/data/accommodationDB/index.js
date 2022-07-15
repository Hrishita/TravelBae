const accommodation = require("../../models/accommodationModel");

// here remove .sort() if you only want to search
exports.searchAccommodation = async function (req, res) {

  var tag = req.body.tags.tags;
  if (tag == undefined || Object.keys(tag).length === 0) {
    tag = ["2 Star", "1 Star", "3 Star", "4 Star", "5 Star"];
  }

  var cin
  if(req.body.cin===''){
    cin = new Date("1900-04-29")
  }else{
    cin = new Date(req.body.cin);
  }

  var cout
  if(req.body.cout===''){
    cout = new Date("2100-04-29")
  }else{
    cout = new Date(req.body.cout);
  }

  accommodation
    .find(
      {
        hotel_name: { $regex: req.body.hotel_name, $options: "i" },
        Rating: { $in: tag },
        check_in_date: {
          $gte: cin,
          $lt: cout
      }

      },
      function (err, accommodation) {
        if (err) return res.json({ success: false, error: err });
        res.json({
          data: accommodation,
        });
      }
    )
    .sort({ price: req.body.sort_type })
};
