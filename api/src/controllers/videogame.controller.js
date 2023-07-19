import Videogame from "../models/Videogame.js";

const videogamePost = async ( name, rating, background_image) => {
    const lol = await Videogame.create({
        name,
        rating,
        background_image
    }) 
}
//req es un obj del cual guardamos el body (req.body)
//para Post se utiliza el body

// export function videogameGetById(req, res){
// const params = req.params;
// }

//req = request
// query / params / body

//uso query cuando la request es "/videogames?=name"
//uso params cuando la req es "/videogame/:id"
//y uso body cuando es un Post "POST http://localhost:3000/videogame"

export default videogamePost