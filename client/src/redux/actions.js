export function getAllVideogames(){
    return dispatch => fetch("http://localhost:3000/videogames") //le pedimos que nos traiga los jueguitos
    .then(res => res.json())//convertimos esa respuesta en un obj json
    .then(payload => {
        dispatch({ type: "GET_ALL_GAMES", payload })
    })
    .catch(error => console.warn(error))
}
//con la info que recibimos que esta dentro de la variable payload
// le decimos que despache la action "GET_ALL_GAMES" con el
//payload que tiene toda la info de nuestra api
