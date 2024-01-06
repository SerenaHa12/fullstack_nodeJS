// Middleware chỉ là một hàm
// Dùng để lọc resquest trước cho request tiếp tục đi
const isLogin = false;
const authMiddleware = (req, res, next) => {
  if (!isLogin) {
    res.redirect("/dang-nhap");
    return;
  }
  next();
};

export default authMiddleware;
