const Article = require("../models/Article");

async function getAllArticles(req, res) {
  const page = req.query.page;
  const limit = req.query.limit;

  if (!page || !limit) {
    res.status(400).json({
      message:
        "Bad Request - Check your query params for missing/invalid parameters",
    });
  }

  Article.find()
    .limit(limit)
    .skip(limit * page)
    .sort({ publishedAt: "asc" })
    .exec(function (err, articles) {
      if (err) {
        res.status(500).json({ message: err });
      }

      Article.countDocuments().exec(function (err, count) {
        res.status(200).json({
          articles,
          page: parseInt(page),
          pages: count / limit,
        });
      });
    });
}

async function getArticleById(req, res) {
  try {
    const id = req.params.id;
    const result = await Article.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { getAllArticles, getArticleById };
