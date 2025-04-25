const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createPost, getAllPosts, getPostById } = require("../controllers/postController");

// Setup Multer
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// Routes
router.post(
  "/",
  upload.single("image"),  // Only expect a single "image" file
  createPost
);

router.get("/", getAllPosts);
router.get("/:id", getPostById);

module.exports = router;
