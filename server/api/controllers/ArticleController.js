const Article = require("../models/Article");

async function getAllArticles(req, res) {
  const { page, limit, title, sort } = req.query;

  if (!page || !limit) {
    res.status(400).json({
      message:
        "Bad Request - Check your query params for missing/invalid parameters",
    });
  }

  try {
    Article.find(
      title
        ? {
            title: { $regex: `.*${title}.*`, $options: "i" },
          }
        : {}
    )
      .limit(limit)
      .skip(limit * page)
      .sort({ publishedAt: sort ? sort : "asc" })
      .exec(function (err, articles) {
        if (err) {
          res.status(500).json(err);
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
  } catch (err) {
    res.status(500).json(err);
  }
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

async function addNewArticle(req, res) {
  try {
    const article = new Article({
      ...req.body,
    });

    const newArticle = await article.save();
    res.status(200).json({ data: newArticle });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function updateArticle(req, res) {
  try {
    const id = req.params.id;
    let article = await Article.findOne({ _id: id });

    Object.assign(article, req.body);

    const newArticle = await article.save();
    res.status(200).json({ data: newArticle });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function deleteArticle(req, res) {
  try {
    const id = req.params.id;
    const result = await Article.remove({ _id: id });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = {
  getAllArticles,
  getArticleById,
  addNewArticle,
  updateArticle,
  deleteArticle,
};
