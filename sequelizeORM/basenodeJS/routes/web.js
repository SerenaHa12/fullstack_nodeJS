module.exports = (app) => {
  var router = require("express").Router();
  const controller = require("../controllers/web/controller");
  const multer = require("multer");
  const fsExtra = require("fs-extra");

  // SET STORAGE
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      let path = "uploads";
      if (!fsExtra.existsSync(path)) {
        fsExtra.mkdirSync(path);
      }

      cb(null, path);
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });

  var upload = multer({ storage: storage });

  router.get("/", controller.getIndex);

  router.get("/name", function (req, res) {
    res.send("hello chi");
  });

  router.get("/name/*", function (req, res) {
    res.send("hello chi *");
  });

  router.get("/name/:age([0-9]{1,2})/:gender", function (req, res) {
    res.send(req.params);
  });

  router.post("/login", (req, res) => {
    console.log(req.baseUrl);
    console.log(req.hostname);
    console.log(req.ip);
    console.log(req.url);
    console.log(req.body);
    //    req.params
    //    req.query
    //    req.body
    res.send("ok");
  });

  router.get("/response", (req, res) => {
    // res.send('ok');
    // res.json({
    //     name: "Nguyen quang dat"
    // });
    // res.status(200);
    // res.redirect('/');
    // res.render('');
  });

  router.get("/form/data", controller.showForm);

  router.post("/uploadfile", upload.single("myFile"), controller.uploadFile);

  router.post(
    "/uploadmultiple",
    upload.array("myFiles"),
    controller.uploadMultiple
  );

  router.get("/view/index", controller.showView);

  app.use(router);
};
