module.exports = (app) => {
  var router = require("express").Router();
  router.get("/", function (req, res) {
    res.send("hello admin");
  });

  app.use("/admin", router);
};
