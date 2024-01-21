var express = require("express");
var router = express.Router();
const sendMail = require("../utils/mail");

/* GET home page. */
router.get("/", async function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/send-email", async (req, res) => {
  const info = await sendMail("dhchsgs12@gmail.com", "Message", "Hello");
  console.log(info);
  res.send("Gửi email");
});

module.exports = router;
