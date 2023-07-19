import database from '../db.js';
import { DataTypes } from 'sequelize';

//importamos sqlz desde donde lo iniciamos "../db.js"
// parar usarlo
//y datatype para indicar los tipos de datos

//creamos nuestra tabla con 3 instancias
// el nombre de la tabla "Videogame"
// las propiedades que va a almacenar
// y las options(configuraciones de nuestra tabla)
const Videogame = database.define("Videogame",{
id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false
},
name: {
    type: DataTypes.STRING,
},
rating: {
    type: DataTypes.FLOAT,
},
background_image:{
    type: DataTypes.TEXT,
},

}, { timestamps: false })

// si estamos haciendo relaciones de muchos a muchos
// la PK primary key es obligatoria

export default Videogame;