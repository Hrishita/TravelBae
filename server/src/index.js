/**
 * References:
 * https://www.section.io/engineering-education/nodejs-mongoosejs-mongodb/
 */

const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const userRouter = require("../routers/userRouter");
const transportationRouter = require("../routers/transportationRouter");
const blogRouter = require("../routers/blogRouter");
const accommodationRouter = require("../routers/accommodationRouter/index");
const itineraryRouter = require("../routers/itineraryRouter");
const specificItineraryRouter = require("../routers/specificItineraryRouter");
const dayItineraryRouter = require("../routers/dayItineraryRouter");

/**
 * Using dotenv package, it reads the .env file provided which contains all the secrets and tokens for
 * mongo and jwt.
 */
dotenv.config();

/**
 * Creating a new express application.
 */
const app = express();
const PORT = process.env.PORT || 8000;

/**
 * Make the server application listen on the port declared above.
 */
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));

/**
 * The app will use json for data parsing, cookie parser for cookies, cors for cross origin requests
 * because server and client will be runnig on different domains and requests are made from different domain.
 */
app.use(express.json());
app.use(cookieParser());

//cors issues middleware
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

/**
 * Using mongoose package, the application will connect to the mongoDB.
 */
mongoose.connect(
  process.env.MDB_CONNECT,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  /**
   * If there is an error sending the response, the error is being logged into the console.
   */
  (err) => {
    if (err) return console.error(err);
    console.log("Connected to MongoDB");
  }
);

/**
 * The below app.use() function is used to mount the specified router function at the path
 * which is being specified.
 */
app.use("/user", userRouter);
app.use("/tp", transportationRouter);
app.use("/bg", blogRouter);
app.use("/acc", accommodationRouter);
app.use("/it", itineraryRouter);
app.use("/sit", specificItineraryRouter);
app.use("/dit", dayItineraryRouter);
