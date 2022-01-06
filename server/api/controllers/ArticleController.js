const mongoose = require("mongoose");
const Article = require("../models/Article");

async function getAllArticles(res, res) {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (err) {
    res.status(500).json(err);
  }
}

async function getArticleById(req, res) {
  try {
    const id = req.params.articleId;
    const result = await Article.findById(id);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
}

module.exports = { getAllArticles, getArticleById };
