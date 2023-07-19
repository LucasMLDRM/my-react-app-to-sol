import { Router } from "express";
import platforms from "./platforms.js";
import videogame from "./videogame.js"

const router = Router() //guardamos la ejecución de router en una variable

router.use("/platforms", platforms )
 //le decimos a router que use la url "/platforms"
router.use("/videogame", videogame )

export default router                                                       