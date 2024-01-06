import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Danh sách khóa học");
});

router.get("/active", (req, res) => {
  res.send("Kích hoạt khóa học");
});

router.get("/pending", (req, res) => {
  res.send("Chưa kích hoạt khóa học");
});

router.get("/dang-nhap", (req, res) => {
  res.send("Đăng nhập");
});

export default router;
