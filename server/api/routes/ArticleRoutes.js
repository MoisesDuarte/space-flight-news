const express = require("express");
const router = express.Router();

const articleController = require("../controllers/ArticleController");

// TODO: Maybe define these schemas on a separate file
/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: "Mongo auto-generated id"
 *           example: "string"
 *         id:
 *           type: string
 *           example: "string"
 *         featured:
 *           type: boolean
 *           example: false
 *         title:
 *           type: string
 *           example: "string"
 *         url:
 *           type: string
 *           example: "string"
 *         imageUrl:
 *           type: string
 *           example: "string"
 *         newsSite:
 *           type: string
 *           example: "string"
 *         summary:
 *           type: string
 *           example: "string"
 *         publishedAt:
 *           type: string
 *           example: "string"
 *         launches:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *                 example: "string"
 *               provider:
 *                 type: string
 *                 example: "string"
 *     ArticleList:
 *       type: object
 *       properties:
 *         articles:
 *           type: array
 *           items:
 *             oneOf:
 *               - $ref: "#/components/schemas/Article"
 *         filter:
 *           type: object
 *           properties:
 *             title:
 *               type: string
 *               example: "string"
 *             page:
 *               type: integer
 *               example: 0
 *             totalPages:
 *               type: integer
 *               example: 0
 */

// * API Routes
/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Retrieve a list of news articles
 *     description: Retrieves a list of news articles. Can be paginated and queried by title for blog listings.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: true
 *         description: page of query to get
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: true
 *         description: The number of articles to return
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         required: false
 *         description: Filter search by title
 *     responses:
 *       200:
 *         description: A list of articles.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/ArticleList"
 */
router.get("/", articleController.getAllArticles);

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Retrieve a single article
 *     description: Retrieve a single article. Can be used to show details of current article
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *     responses:
 *       200:
 *         description: A single article
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Article"
 */
router.get("/:id", articleController.getArticleById);

module.exports = router;
