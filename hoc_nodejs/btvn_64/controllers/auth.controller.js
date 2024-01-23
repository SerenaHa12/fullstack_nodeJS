module.exports = {
  login: (req, res) => {
    const error = req.flash("error");
    console.log(error);
    res.render("auth/login", { error });
  },
};
