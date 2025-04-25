const Post = require("../models/postModel");

const createPost = async (req, res) => {
  try {
    const { title, description1, description2, keywords, category, summary } = req.body;

    const image = req.file?.path || "";  // Fetch the image path from the uploaded file

    const newPost = new Post({
      title,
      description1,
      description2,
      image,
      keywords,
      category,
      summary,
    });

    await newPost.save();
    res
      .status(201)
      .json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Post error:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts" });
  }
};

const getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post" });
  }
};

module.exports = { createPost, getAllPosts, getPostById };
