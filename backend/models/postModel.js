const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: String,
    description1: String,
    description2: String,
    image: String,
    keywords: String,
    category: String,
    summary: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
