const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
// env config
dotenv.config();

const connectDB = require("./config/db");

// route imports
const userRoutes = require("./routes/userRouts");
const blogRoutes = require("./routes/blogRoutes");

// Port
const PORT = process.env.PORT || 8080;

// Connect DB
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/blog", blogRoutes);

// listen
app.listen(PORT, () => {
  console.log(
    `Server Running On ${process.env.DEV_MODE} Mode Port On ${PORT}`.bgCyan
      .white
  );
});
