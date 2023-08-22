const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      require: [true, "User Name is required"],
    },
    email: {
      type: String,
      require: [true, "Email is required"],
    },
    password: {
      type: String,
      require: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
