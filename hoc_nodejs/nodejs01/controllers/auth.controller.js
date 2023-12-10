const authController = {
  login: (req, res) => {
    res.send("<h1>Đăng nhập</h1>");
    res.render("auth/login", {
      layout: "auth/layout",
    });
  },
};

export default authController;
