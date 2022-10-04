import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./cashReducer";
import {clientReducer} from "./clientReducer";
import thunk from "redux-thunk";

//соединяем редбюсеры
const rootReducer = combineReducers({
    cash:cashReducer,
    client:clientReducer
})

export const reduxStore = createStore(rootReducer,applyMiddleware(thunk))