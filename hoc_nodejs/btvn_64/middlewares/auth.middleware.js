// kiểm tra trạng thái đăng nhập, nếu chư addanwg nhập thì chuyển về trạng thái login
// nếu đăng nhập r -> next()

module.exports = (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.redirect("/auth/login");
};
