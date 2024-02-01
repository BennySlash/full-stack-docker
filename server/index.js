const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dataRouter = require("./routes/main");

const MONGO_URI =
  "mongodb+srv://biniyamayele:Testing1234@cluster0.xl8ulig.mongodb.net/";

const app = express();
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSucessStatus: 200,
};
app.use(cors(corsOptions));

app.use("/", dataRouter);

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

app.listen(4000, () => {
  console.log("listining on port 4000");
});
