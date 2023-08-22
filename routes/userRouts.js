const express = require("express");
const {
  getAllUsers,
  registerController,
  loginController,
} = require("../controllers/userController");

// router object
const router = express.Router();

// get all user -- get
router.get("/all-users", getAllUsers);

// create all user -- post
router.post("/register", registerController);

// login user's -- post
router.post("/login", loginController);

module.exports = router;
