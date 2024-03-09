const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const port = process.env.PORT || 5000;

// Middle ware
app.use(cors());
app.use(express.json());



app.get("/", (req, res) => {
  res.send("Sever is running 😊😊😊");
});
app.listen(port);