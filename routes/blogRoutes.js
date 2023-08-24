const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  deleteBlogController,
  deleteBlogByIdController,
  userBlogController,
} = require("../controllers/blogController");

// router object
const router = express.Router();

// routes
// get all blogs -- get
router.get("/all-blog", getAllBlogsController);

// create blog -- post
router.post("/create-blog", createBlogController);

// update blog -- put
router.put("/update-blog/:id", updateBlogController);

// delete single blog -- delete
router.get("/get-blog/:id", deleteBlogByIdController);

// delete blog -- delete
router.delete("/delete-blog/:id", deleteBlogController);

router.get("/user-blog/:id", userBlogController);

module.exports = router;
