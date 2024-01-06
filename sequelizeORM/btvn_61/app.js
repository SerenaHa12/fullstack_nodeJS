require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

// app.use("/admin", require("./routes/route.js").router);
// app.use(require("./routes/route").router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.multer());

app.set("view engine", "ejs");
app.set("views", "views");

require("./routes/route")(app);

app.listen(process.env.PORT, function () {
  console.log("server listening on port " + process.env.PORT);
});
