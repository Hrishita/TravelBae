const activity = require("../../models/activityModel");

exports.searchActivity = async function (req, res) {

  var tag = req.body.tags.tags;
  if (tag == undefined || Object.keys(tag).length === 0) {
    tag = ["Camping", "Fishing", "Hiking"];
  }
  activity
    .find(
      {
        activity_address : { $regex: req.body.hotel_name, $options: "i" },
        activity_type : { $in: tag },
      },
      function (err, activity) {
        if (err) return res.json({ success: false, error: err });
        res.json({
          data: activity,
        });
      }
    )
    .sort({ price: req.body.sort_type })
};
