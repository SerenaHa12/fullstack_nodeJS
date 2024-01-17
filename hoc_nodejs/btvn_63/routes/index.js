var express = require("express");
var router = express.Router();
const db = require("../utils/db");

/* GET home page. */
router.get("/", async function (req, res, next) {
  // console.log(process.env.APP_NAME);
  // console.log(db);
  try {
    const emails = await db`SELECT * FROM emails`;
    // console.log(emails);
  } catch (e) {
    console.log(e);
    console.log("lỗi kết nối CSDL");
  }

  // const users = await db`SELECT * FROM users`;
  // console.log(users);
  res.render("index", { title: "Express" });
});

module.exports = router;
