require("dotenv").config();
const express = require("express");
const router = require("./routes/mail.js");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const bodyParser = require("body-parser");

// connect database
const { Client } = require("pg");
const client = new Client({
  user: "postgres",
  host: "localhost",
  database: "fullstack_k1",
  password: "123",
  port: 5432,
});
client.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});
const app = express();

app.set("view engine", "ejs");
app.use(expressLayouts);

app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
