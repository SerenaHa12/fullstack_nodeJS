require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const expressLayouts = require("express-ejs-layouts");
const app = express();

// app.use("/admin", require("./routes/route.js").router);
// app.use(require("./routes/route").router);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(expressLayouts);
// app.use(bodyParser.multer());

app.set("view engine", "ejs");
app.set("views", "views");
app.set("layout", "master.ejs");

app.use((req, res, next) => {
  (res.locals.masterMenu = {
    headerMenu: [
      {
        label: "home",
        link: "/",
      },
      {
        label: "git",
        link: "https://github.com/SerenaHa12",
      },
    ],
    footerMenu: [
      {
        label: "home",
        link: "/",
      },
      {
        label: "git",
        link: "https://github.com/SerenaHa12",
      },
    ],
  }),
    next();
});

require("./routes/route")(app);

app.listen(process.env.PORT, function () {
  console.log("server listening on port " + process.env.PORT);
});
