import express from "express";
const router = express.Router();

import userController from "../controllers/user.controllers.js";

//HTTP GET
router.get('/', userController.index)
export default router;
