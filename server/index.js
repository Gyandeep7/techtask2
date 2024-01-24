const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const router = require("./Routes/AuthRoute");
const { MONGO_URL, PORT } = process.env;

mongoose
  .connect('mongodb://localhost:27017/TaskNew')
  .then(() => console.log("MongoDB is  connected successfully"))
  .catch((err) => console.error(err));

  app.use(express.json());
app.use(cors());
app.use("/", router)

app.listen(4000, () => {
  console.log(`Serer running`);
});



