const express = require("express");

const app = express();

require("dotenv").config();

app.get("/", (req, res) => {
  res.json("API is online...");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});
