import express from "express";
import routerOrders from "./orders.js";
const router = express.Router();
//HTTP GET
router.get("/", (req, res) => {
  const { status, keyword } = req.query;
  console.log(status, keyword);
  res.send(`<h1>Danh sách người dùng</h1>
  <h2>Status: ${status}</h2>
  <h2>Keyword: ${keyword}</h2>`);
});

router.get("/add", (req, res) => {
  res.send("<h1>Thêm người dùng</h1>");
});

router.get("/edit/:id", (req, res) => {
  const id = req.params.id;
  res.send("<h1>Sửa người dùng: " + id + "</h1>");
});

//Order Router
router.use("/orders", routerOrders);

export default router;
