const userRouter = require("express").Router();
const userService = require("../../middleware/userService");
/**
 * This router is to create a POST API for userInfo. This API can be tested on Postman
 * with route '/userInfo/userProfile' at the end of the server_url.
 * Upon passing the email, it should return all the information related to the user in the JSON format.
 */
 userRouter.post("/userProfile", (req, res) => {
  const { email } = req.body;
  console.log("email..............",email)
  try {
    userService(email).then((user) => {
      return res.json(user);
    });
  } catch (err) {
    res.json({ error: "Unable to display profile" });
  }
});

    
module.exports = userRouter;
