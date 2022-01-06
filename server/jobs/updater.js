const cron = require("node-cron");
const fetch = require("node-fetch");

const Article = require("../api/models/Article");
const Log = require("../api/models/Log");

async function updateDatabase() {
  // TODO: Take care of redundancy
  // TODO: Log script processing

  const api_url = "https://api.spaceflightnewsapi.net/v3";
  let limit = 0;
  let articles = [];

  // ? Get last inserted articleId
  const lastLog = await Log.find().limit(1);
  const { id } = lastLog[0].lastArticleInserted;

  // TODO: Move to utils, common fetch
  try {
    const res = await fetch(`${api_url}/articles/count`);
    limit = await res.json();
  } catch (err) {
    throw new Error(`Error fetching article count - ${err}`);
  }

  // ? Query remote api for articles
  try {
    const res = await fetch(`${api_url}/articles?id_gt=${id}&_limit=${limit}`);
    articles = await res.json();
  } catch (err) {
    throw new Error(`Error fetching articles - ${err}`);
  }

  // ? Inserting articles into db
  try {
    console.info(articles);
    await Article.insertMany(articles);
  } catch (err) {
    console.log(err);
  }

  // ? Insert log into log collection
  try {
    const lastArticle = await Article.find({}).limit(1);
    const log = new Log({
      triggeredAt: new Date().toISOString(),
      lastArticleInserted: lastArticle[0],
    });

    await log.save();
  } catch (err) {
    console.log("Error inserting log!", err);
  }
}

cron.schedule("0 0 9 * * *", async () => {
  console.log("Running database update job...");
  await updateDatabase();
  console.log("Finished database update job.");
});
