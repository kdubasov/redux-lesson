import {combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {clientReducer} from "./clientReducer";

//соединяем редбюсеры
const rootReducer = combineReducers({
    cash:cashReducer,
    client:clientReducer
})

export const reduxStore = createStore(rootReducer)