/**
 * Author: Smriti Mishra
 * This file does all the operations on plantrips collection of Mongo DB
 */
const planTrip = require("../../models/planTripModel/index");

/**
 * This function does all the operations on planTrip collection
 * @param {*} req : The request passsed as a parameter to the function planTripDB
 * @returns : The function returns the planTrip model
 */

exports.createPlanTrip = function (req, res) {
  console.log("Creating");
  const insertPlanTripData = new planTrip();
  const {
    plan_id,
    plan_name,
    userID,
    city,
    country,
    start_date,
    end_date,
    is_completed,
    travel_partner,
    recommended_itineraries,
    accommodation,
    transportation,
    activity,
  } = req.body;

  console.log(req.body);

  (insertPlanTripData.plan_id = plan_id), //Math.random() * 1000000),
    (insertPlanTripData.plan_name = plan_name),
    (insertPlanTripData.userID = userID),
    (insertPlanTripData.city = city),
    (insertPlanTripData.country = country),
    (insertPlanTripData.start_date = start_date),
    (insertPlanTripData.end_date = end_date),
    (insertPlanTripData.is_completed = is_completed),
    (insertPlanTripData.travel_partner = travel_partner),
    (insertPlanTripData.recommended_itineraries = recommended_itineraries),
    (insertPlanTripData.accommodation = accommodation),
    (insertPlanTripData.transportation = transportation),
    (insertPlanTripData.activity = activity),
    insertPlanTripData.save(function (err, planTrip) {
      if (err) {
        res.send(err);
      }
      res.json(planTrip);
    });
};

exports.fetchAllPlanTrips = function (req, res) {
  planTrip.find({}, function (err, planTrips) {
    if (err) {
      res.send(err);
    }
    res.json(planTrips);
  });
};

exports.findPlanTripByUserID = function (req, res) {
  let { userID } = req.body;
  if (userID === undefined) {
    userID = req.params.id;
  }
  planTrip.find({ userID }, function (err, planTrip) {
    if (err) {
      res.send(err);
    }
    res.json(planTrip);
  });
};

exports.deletePlanTripByID = function (req, res) {
  console.log("Deleting the data");
  const { plan_id } = req.body;
  planTrip.findOneAndDelete({ plan_id }, function (err, planTrip) {
    if (err) {
      res.send(err);
    }
    res.json(planTrip);
  });
};

exports.updatePlanTripByID = function (req, res) {
  console.log("Updating the paln status");
  const { plan_id } = req.body;
  planTrip.findOneAndUpdate(
    { plan_id },
    { is_completed: true },
    function (err, planTrip) {
      if (err) {
        res.send(err);
      }
      res.json(planTrip);
    }
  );
};

exports.findPlanTripByPlanID = function (req, res) {
  let { plan_id } = req.body;
  planTrip.find({ plan_id }, function (err, planTrip) {
    if (err) {
      res.send(err);
    }
    res.json(planTrip);
  });
};
