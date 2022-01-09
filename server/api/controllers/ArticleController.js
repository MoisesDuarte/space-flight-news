const Article = require("../models/Article");

async function getAllArticles(req, res) {
  const { page, limit, title, sort } = req.query;

  if (!page || !limit) {
    res.status(400).json({
      message:
        "Bad Request - Check your query params for missing/invalid parameters",
    });
  }

  const titleFilter = title
    ? {
        title: { $regex: `.*${title}.*`, $options: "i" },
      }
    : {};

  try {
    Article.find({ ...titleFilter })
      .limit(limit)
      .skip(limit * page)
      .sort({ publishedAt: sort ? sort : "asc" })
      .exec((err, articles) => {
        if (err) {
          res.status(500).json(err);
        }

        Article.countDocuments({ ...titleFilter }).exec((err, count) => {
          res.status(200).json({
            articles,
            pagination: {
              title: title ? title : "",
              page: parseInt(page),
              totalPages: Math.ceil(count / limit),
              sort: sort ? sort : "asc",
            },
          });
        });
      });
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getArticleById(req, res) {
  const { id } = req.params;

  Article.findById(id).exec((err, doc) => {
    if (err) return res.status(500).json({ error: err });
    return res.status(200).json({ data: doc });
  });
}

async function addNewArticle(req, res) {
  const article = new Article({ ...req.body });

  article.save((err, doc) => {
    if (err) return res.status(500).json({ error: err });
    res.status(200).json({ data: doc });
  });
}

async function updateArticle(req, res) {
  const { id } = req.params;

  Article.findOneAndUpdate({ _id: id }, req.body, {}, (err, doc) => {
    if (err) return res.status(500).json({ error: err });
    return res.status(200).json({ data: doc });
  });
}

async function deleteArticle(req, res) {
  const { id } = req.params;

  Article.deleteOne({ _id: id }).exec((err, count) => {
    if (err) return res.status(500).json({ error: err });
    return res.status(200).json(count);
  });
}

module.exports = {
  getAllArticles,
  getArticleById,
  addNewArticle,
  updateArticle,
  deleteArticle,
};
