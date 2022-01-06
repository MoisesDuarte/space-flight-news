// ? Dependencies
const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
require("dotenv").config();

// ? Constants
const PORT = process.env.PORT || 3000;

// ? Swagger Definitions
const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Space Flight News Mongo API",
      version: "1.0.0",
      description:
        "This is a REST API application made with Express and Mongoose. It retrieves data from a database with data served by the official Space Flight News API",
    },
    servers: [
      {
        url: `http://localhost:${PORT}`,
        description: "Development Server",
      },
    ],
  },
  apis: ["./api/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

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

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/articles", articleRoutes);

// ? Server listening
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

module.exports = app;
