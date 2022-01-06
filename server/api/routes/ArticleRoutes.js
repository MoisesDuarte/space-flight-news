const express = require("express");
const router = express.Router();

const articleController = require("../controllers/ArticleController");

// * API Routes
router.get("/", articleController.getAllArticles);
router.get("/:id", articleController.getArticleById);

module.exports = router;
