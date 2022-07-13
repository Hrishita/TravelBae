const activityDB = require("../../data/activityDB");

exports.searchActivity = function (req, res) {
    activityDB.searchActivity(req, res);
};