import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Học express không khó");
});

router.get("/san-pham", (req, res) => {
  res.send("Danh sách sản phẩm");
});

router.get("/dang-nhap", (req, res) => {
  res.send("Đăng nhập");
});

export default router;
