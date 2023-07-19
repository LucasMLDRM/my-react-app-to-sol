import { Router } from "express";
import platform from "../controllers/platforms.controller.js";

const platformRouter = Router();

platformRouter.get("/", platform)

export default platformRouter