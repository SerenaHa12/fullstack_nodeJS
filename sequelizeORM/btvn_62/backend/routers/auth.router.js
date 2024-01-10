const express = require("express");
const router = express.Router();
const Yup = require("yup");
const validateForm = require("../controllers/auth.controller");

router.post("/login", (req, res) => {
  validateForm(req, res);
});

router.post("/signup", (req, res) => {
  validateForm(req, res);
});

module.exports = router;
