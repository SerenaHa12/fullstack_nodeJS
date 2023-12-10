import express from "express";
import homeController from "../controllers/home.controller.js";
const router = express.Router();
//HTTP GET
router.get("/", homeController.index);

router.get("/san-pham", homeController.showProducts);

export default router;
