require("dotenv").config();

const fetch = require("node-fetch");
const mongoose = require("mongoose");

const Article = require("../api/models/Article");
const Log = require("../api/models/Log");

async function initialBulkCreate() {
  // ? Mongoose Connection
  await mongoose
    .connect(process.env.MONGO_DB_STRING, { useNewUrlParser: true })
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log("Connection error:", err);
    });

  // ? Get from first to last record
  const api_url = "https://api.spaceflightnewsapi.net/v3";

  let count = 100;
  let articles = [];

  console.log("Fetching total article count...");

  // ? Fetch count to use as pagination limit to query all
  // TODO: Unusable due to cloud db atlas free storage limit
  // try {
  //   const res = await fetch(`${api_url}/articles/count`);
  //   count = await res.json();
  // } catch (err) {
  //   throw new Error(`Error fetching article count - ${err}`);
  // }

  console.log("Querying remote articles api...");

  // ? Query remote api for articles
  try {
    const res = await fetch(`${api_url}/articles?_limit=${count}`);
    articles = await res.json();
  } catch (err) {
    throw new Error(`Error fetching articles - ${err}`);
  }

  console.log("Inserting articles into database...");

  // ? Inserting articles into db
  try {
    await Article.deleteMany();
    await Article.insertMany(articles);
  } catch (err) {
    console.log(err);
  }

  console.log("Inserting log into database...");

  // ? Insert log into log collection
  try {
    await Log.deleteMany();
    const lastArticle = await Article.findOne({}).limit(1);
    const log = new Log({
      triggeredAt: new Date().toISOString(),
      lastArticleInserted: lastArticle,
    });

    await log.save();
  } catch (err) {
    console.log("Error inserting log!", err);
  }

  console.info("Successfully populated database!");

  mongoose.connection.close();
}

initialBulkCreate();
