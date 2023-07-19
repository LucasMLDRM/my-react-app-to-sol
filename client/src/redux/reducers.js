const initialState = {
    videogames: {}
}// creamos nuestro estado inicial vacio
//procedemos a crear nuestro reducer que recibe el estado y
// una action
function rootReducer(state = initialState, action){
    switch(action.type) {
        case "GET_ALL_GAMES":
            return{
                ...state
            }
        default:
            return state
    }
}

export default rootReducer;