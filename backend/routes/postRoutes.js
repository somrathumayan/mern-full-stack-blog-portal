const express = require("express");
const router = express.Router();
const multer = require("multer");
const { createPost, getAllPosts, getPostById, getNewsPosts } = require("../controllers/postController");
const filterByCategory = require("../middlewares/filterByCategory");

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


// Route for creating a post
router.post('/create', upload.single('image'), createPost);

// Route to fetch posts with category 'News'
router.get("/news", getNewsPosts);

// Example controller just sending the filtered posts
router.get("/news", filterByCategory("News"), (req, res) => {
  res.status(200).json(req.filteredPosts);
});


module.exports = router;
