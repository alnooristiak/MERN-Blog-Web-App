const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// create user register user
exports.registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "please fill all filds",
      });
    }
    // existing User
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(401).send({
        success: false,
        message: "user already exist",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    password = hashedPassword;

    // save new user
    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();
    return res.status(201).send({
      success: true,
      message: "New User Created Successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "error in register call back",
      error,
    });
  }
};

// get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      userCount: users.length,
      success: true,
      message: "all users data",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in get all Users",
      error,
    });
  }
};

// login user
exports.loginController = (req, res) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || password) {
      return res.Status(401).sent({
        success: false,
        message: "Please Provide Eamil and password",
      });
    }
    const user = await userModel.findOne({email})
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error in Login callback",
      error,
    });
  }
};
