var express = require("express");
var router = express.Router();
const sql = require("../utils/db");

/* GET home page. */
router.get("/", async function (req, res, next) {
  try {
    const users = await sql`SELECT * FROM users`;
    console.log(users);
  } catch (e) {
    if (e.errors && e.errors[0].message) {
      //kết nối
      console.log(e.errors[0].message);
    } else {
      //truy vấn (sql sai)
      console.log(e.message);
    }

    // console.log("Lỗi kết nối csdl");
  }
  res.render("index", { title: "Express" });
});

module.exports = router;
