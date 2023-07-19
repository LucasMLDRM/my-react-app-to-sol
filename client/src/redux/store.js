import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers.js"

const store = createStore(rootReducer, applyMiddleware(thunk))
//le pasamos nuestro reducer 
//y aplyMiddleware que va a aplicar el middleware "thunk"
export default store;