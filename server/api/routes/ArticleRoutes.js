const express = require("express");
const router = express.Router();

const articleController = require("../controllers/ArticleController");

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
 *             sort:
 *               type: string
 *               example: "string"
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
 *       - in: query
 *         name: sort
 *         schema:
 *           type: string
 *         required: false
 *         description: Sorting order for articles
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

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Add a single article
 *     description: Add a single article.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Article"
 *     responses:
 *       200:
 *         description: The new article
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Article"
 */
router.post("/", articleController.addNewArticle);

/**
 * @swagger
 * /articles:
 *   put:
 *     summary: Update a single article
 *     description: Update a single article by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Article"
 *     responses:
 *       200:
 *         description: The updated article
 *         content:
 *           application/json:
 *             schema:
 *               $ref: "#/components/schemas/Article"
 */
router.put("/:id", articleController.updateArticle);

/**
 * @swagger
 * /articles:
 *   delete:
 *     summary: Removes a single article
 *     description: Removes a single article by id.
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The article id
 *     responses:
 *       200:
 *         description: "The deleted model count"
 *         content:
 *           application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   deletedCount:
 *                     type: integer
 *                     example: 0
 */
router.delete("/:id", articleController.deleteArticle);

module.exports = router;
