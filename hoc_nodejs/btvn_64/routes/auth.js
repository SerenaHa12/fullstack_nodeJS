var express = require("express");
var router = express.Router();
const authController = require("../controllers/auth.controller");
const passport = require("passport");

/* GET users listing. */
router.get("/login", authController.login);
router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  })
);
router.get("/logout", (req, res) => {
  req.logout(() => {});
  return res.redirect("/auth/login");
});

router.get("/google/redirect", passport.authenticate("google"));
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/auth/login",
    failureFlash: true,
    successRedirect: "/",
  })
);
module.exports = router;
