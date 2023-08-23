const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Title is require"],
    },
    description: {
      title: String,
      require: [true, "description is required"],
    },
    image: {
      title: String,
      require: [true, "image is require"],
    },
  },
  { timestamps: true }
);

const blogModel = mongoose.model("Blog", blogSchema);

model.exports = blogModel;
