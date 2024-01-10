require("dotenv").config();
const express = require("express");
const cors = require("cors");
const authRouter = require("./routers/auth.router");

// const server = require("http").createServer();
const app = express();
// const { Server } = require("socket.io");

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

app.get("/", (req, res) => {
  res.json("hi");
});

app.listen(process.env.PORT, function () {
  console.log("server listening on port " + process.env.PORT);
});
