const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const colors = require("colors");
const dotenv = require("dotenv");
// env config
dotenv.config();

const connectDB = require("./config/db");

// Port
const PORT = process.env.PORT || 8080;

// Connect DB
connectDB();

// rest object
const app = express();

// middlewares
app.use(cors());
app.use(express.json());
app.use(morgan('dev')); 

// routes
app.get('/', (req, res) => {
    res.status(200).send({
        "message": "Node Server"
    })
})

// listen 
app.listen(PORT, () =>{
    console.log(`Server Running On ${process.env.DEV_MODE} Mode Port On ${PORT}`.bgCyan.white)
})