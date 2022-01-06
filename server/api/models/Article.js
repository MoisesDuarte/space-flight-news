const { Schema, model } = require("mongoose");

const Article = model(
  "Article",
  Schema({
    id: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    newsSite: {
      type: String,
      required: true,
    },
    summary: {
      type: String,
      default: "",
    },
    publishedAt: {
      type: String,
      required: true,
    },
    launches: {
      type: Array,
      default: [],
    },
    events: {
      type: Array,
      default: [],
    },
  })
);

module.exports = Article;
