const Article = require("../models/Article");

async function getAllArticles(req, res) {
  const { page, limit, title } = req.query;

  if (!page || !limit) {
    res.status(400).json({
      message:
        "Bad Request - Check your query params for missing/invalid parameters",
    });
  }

  Article.find(
    title
      ? {
          title: { $regex: `.*${title}.*`, $options: "i" },
        }
      : {}
  )
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
          pagination: {
            title: title ? title : "",
            page: parseInt(page),
            totalPages: count / limit,
          },
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
