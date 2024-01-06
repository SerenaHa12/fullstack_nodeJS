import express from "express";
import routerCourses from "./course.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = express.Router();
// --> Tất cá chịu ảnh hưởng router middleware
// router.use(authMiddleware);
router.get("/", (req, res) => {
  const { status, keyword } = req.query;
  const userAgent = req.headers["user-agent"];
  res.send(`<h1>Danh sách người dùng</h1>
  <h2>Status: ${status}</h2>
  <h2>Keyword: ${keyword}</h2>
  <h2>User Agent: ${userAgent}</h2>`);
});

router.get("/add", (req, res) => {
  res.send("Thêm người dùng");
});

router.get("/active/:id", (req, res) => {
  const id = req.params.id;
  res.send("Kích hoạt người dùng " + id);
});

router.use("/courses", routerCourses);

export default router;
