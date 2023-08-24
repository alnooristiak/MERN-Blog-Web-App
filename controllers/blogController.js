const blogModel = require("../models/blogModel");

// get all blogs
exports.getAllBlogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({});
    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "no blogs found",
      });
    }
    return res.status(200).send({
      success: true,
      BlogCount: blogs.length,
      message: "all blog lists",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error well geting all blog",
      error,
    });
  }
};

// create blog
exports.createBlogController = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    // validation
    if (!title || !description || !image) {
      return res.status(400).send({
        success: false,
        message: "please provide all filds",
      });
    }
    const newBlog = new blogModel({ title, description, image });
    await newBlog.save();
    return res.status(201).send({
      success: true,
      message: "blog created",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error well creating blog",
      error,
    });
  }
};

// update blog
exports.updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "blog updated successfully",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error well update blog",
    });
    error;
  }
};

// delete single blog
exports.deleteBlogByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found with this id",
      });
    }
    return res.status(200).send({
      success: true,
      message: "fetch single blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error well getting single blog",
    });
    error;
  }
};

// delete blogs
exports.deleteBlogController = async (req, res) => {
  try {
    await blogModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "blog deleting successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error well deleting blog",
    });
    error;
  }
};
