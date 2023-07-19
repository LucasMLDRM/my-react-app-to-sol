import express from "express"
import "dotenv/config" //importamos nuestro .env
import app from "./src/app.js" // importamos app
import database from './src/db.js'; // importamos nuestra db
// importamos todo con su extension .js

const { PORT } = process.env //sacamos el port de .env

database.sync({ force: true }) //sincroniza todos los modelos nuestra db 
.then(() => {
    app.listen(PORT, () => {
        console.log(`Running on ${PORT}`) //ponemos que nuestra app escuche
    })                                    //las solicitudes de ese puerto
    
}                      
)
//usamos { force: true } para desarrollo, esto reinicia las tablas con cualquier cambio y las recrea desde 0
