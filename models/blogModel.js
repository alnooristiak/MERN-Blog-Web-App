const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is require"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    image: {
      type: String,
      required: [true, "image is require"],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "user id is require"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

module.exports = blogModel;
