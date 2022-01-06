// ? Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
require("dotenv").config();

// ? Cron Jobs
require("./jobs/updater");

// ? Server setup
const app = express();
app.use(morgan("dev"));

// ? Mongoose Connection
mongoose
  .connect(process.env.MONGO_DB_STRING, { useNewUrlParser: true })
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((err) => {
    console.log("Connection error:", err);
  });

// ? Routing
const articleRoutes = require("./api/routes/ArticleRoutes");

app.get("/", (req, res) => {
  res.status(200).json("Fullstack Challenge 2021 🏅 - Space Flight News");
});

app.use("/articles", articleRoutes);

// ? Server listening
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = app;
