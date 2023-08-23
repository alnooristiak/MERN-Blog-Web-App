const express = require("express");

// router object
const router = express.Router();

// routes
// get all blogs -- get
router.get("/all-blog", getAllBlogsController);

// create blog -- post
router.post("/create-blog", createBlogController);

// update blog -- put
router.put("/update-blog/:id", updateBlogController);

// delete blog -- delete
router.delete("/delete-blog/:id", deleteBlogController);

// delete single blog -- delete
router.delete("/delete-blog/:id", deleteBlogByIdController);

module.exports = router;
