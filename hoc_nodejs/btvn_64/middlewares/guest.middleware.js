// nếu đăng nhập r k thể vào trang login
// thực hiển kiểm tra user chưa đăng nhập
// loại bỏ việc gọi middleware ở trang logout

module.exports = (req, res, next) => {
  const pathname = req.baseUrl + req.path;
  if (!req.user || pathname === "/auth/logout") {
    return next();
  }
  return res.redirect("/");
};
