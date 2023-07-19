// en este archivo vamos a crear las relaciones
//de nuestros modelos.
//esta relacion sera de muchos a muchos .belongToMany
// ejemplo muchos juegos pueden estar para 
//muchas plataformas y tener muchos generos
import Genre from "./Genre.js";
import Platform from "./Platform.js";
import Videogame from "./Videogame.js";

Videogame.belongsToMany(Platform, { through:
    "videogame_platform", timestamps: false })
Platform.belongsToMany(Videogame, { through:
    "videogame_platform", timestamps: false })

    // creo las relaciones, les indico mediante
    //que tabla intermedia se van a relacionar
    //pasandole el obj con la prop through que
    // indica la tabla


Videogame.belongsToMany(Genre, { through:
    "videogame_genre", timestamps: false })
Genre.belongsToMany(Videogame, { through:
    "videogame_genre", timestamps: false })

    // y le agregamos la prop "timestamps: false"
    // solo para indicarle a sqlz que no queremos
    // la fecha de creación

export { Videogame, Genre, Platform }

