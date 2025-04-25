const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description1: { type: String, required: true },
    description2: { type: String, required: true },
    keywords: { type: String },
    category: {
      type: String,
      enum: ["News", "International", "Entertainment", "Sports", "Jobs"],
      required: true,
    },
    summary: { type: String },
    image: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", postSchema);
