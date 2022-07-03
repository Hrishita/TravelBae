const Destination = require("../../models/destinationModel");
/**
 * This function does all the operations on destination collection
 * @param {*} req : The request passsed as a parameter to the function.
 * @param {*} res : The response sent
 */
exports.insertDestination = function(req, res) {
  const insertDestinationData = new Destination();
  const {
    dest_name,
    dest_desc,
    dest_code,
    latitude,
    longitude,
    blogs,
    activities,
    country_name,
    img,
  } = req.body;
  console.log(req.body);
  (insertDestinationData.dest_name = dest_name),
  (insertDestinationData.dest_desc = dest_desc),
  (insertDestinationData.dest_code = dest_code),
  (insertDestinationData.latitude = latitude),
  (insertDestinationData.longitude = longitude),
  (insertDestinationData.blogs = blogs),
  (insertDestinationData.activities = activities),
  (insertDestinationData.country_name = country_name),
  (insertDestinationData.img = img);

  insertDestinationData.save((err) => {
    if(err) return res.json({success: false, error: err});
    return res.json({success: true});
  })
};
