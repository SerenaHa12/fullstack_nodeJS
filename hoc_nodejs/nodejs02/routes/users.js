var express = require("express");
var router = express.Router();
const userController = require("../controllers/user.controller");

/* GET users listing. */
router.get("/", userController.index);
router.get("/add", userController.add);
router.post("/add", userController.handleAdd);

module.exports = router;
