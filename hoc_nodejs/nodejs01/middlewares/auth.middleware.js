// middleware là một function có 3 tham số: req, res, next
/**
 * next -> là một hàm
 */
const middleware = (req, res, next) => {
  const isLogin = true;
  if (!isLogin) {
    res.redirect("/dang-nhap");
  }
  next(); // cho phép request di tiep
};

export default middleware;