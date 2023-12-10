import express from "express";
const router = express.Router();

//HTTP GET
router.get("/", (req, res) => {
  res.send("<h1>Danh sách đơn hàng</h1>");
});

router.get("/completed", (req, res) => {
  res.send("<h1>Đơn hàng đã hoàn thành</h1>");
});

router.get("/cancel", (req, res) => {
  res.send("<h1>Đơn hàng đã hủy</h1>");
});
export default router;
