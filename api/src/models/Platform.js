import database from '../db.js';
import { DataTypes } from "sequelize";

const Platform = database.define("Platform", {
id: {
    primaryKey: true,
    type: DataTypes.INTEGER, // Tipo de dato Integer
    allowNull: false // no acepta no poner datos
},
image_background: {
    type: DataTypes.TEXT   // Text no tiebe limit char
},
name: {
    type: DataTypes.STRING //string tiene limite de 
                           //256 caracteres
}
}, { timestamps: false})

// Ejemplo de ID auto Generado
// id: {
//     primaryKey: true,
//     type: DataTypes.UUID, //tipo dedato de id UUID
//     defaultValue: DataTypes.UUIDV4,// va a generar
//                 //un id tipo uuid version 4
//     allowNull: false
//             }

export default Platform