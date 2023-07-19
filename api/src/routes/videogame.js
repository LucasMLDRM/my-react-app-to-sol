import express from "express";
import { Router } from "express";
import videogamePost from "../controllers/videogame.controller.js";

const videogameRouter = Router();

videogameRouter.use(express.json());

videogameRouter.post("/", async (req, res)=>{
    const { name, rating, background_image } = req.body;
    
    try {
        if(!name || !rating || !background_image) throw Error('Falta Info');
        else{
            const newVideogame = await videogamePost( name, rating, background_image);
            return  res.status(200).json(`Se creó el videojogo `);
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

export default videogameRouter