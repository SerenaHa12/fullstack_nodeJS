require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const server = require("http").createServer();
const app = express();
// const { Server } = require("socket.io");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("hi");
});

app.listen(process.env.PORT, function () {
  console.log("server listening on port " + process.env.PORT);
});
