exports.getIndex = (req, res, next) => {
  res.render("index.ejs");
};

exports.showForm = (req, res) => {
  res.render("form");
};

exports.showView = (req, res) => {
  res.render("view");
};

exports.uploadFile = (req, res) => {
  const file = req.file;
  console.log(1);
  if (!file) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
};

exports.uploadMultiple = (req, res) => {
  const files = req.file;
  console.log(1);
  if (!files) {
    const error = new Error("Please upload a file");
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(files);
};
