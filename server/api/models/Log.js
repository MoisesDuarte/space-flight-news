const { Schema, model } = require("mongoose");

const Log = model(
  "Log",
  Schema({
    triggeredAt: {
      type: String,
      required: true,
    },
    lastArticleInserted: {
      type: Object,
      required: true,
    },
  })
);

module.exports = Log;
