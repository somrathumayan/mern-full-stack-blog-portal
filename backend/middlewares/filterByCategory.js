// middlewares/filterByCategory.js
const Post = require("../models/postModel");

const filterByCategory = (categoryName) => {
  return async (req, res, next) => {
    try {
      const posts = await Post.find({ category: categoryName });
      req.filteredPosts = posts;
      next();
    } catch (error) {
      res.status(500).json({ message: "Error filtering posts", error });
    }
  };
};

module.exports = filterByCategory;
