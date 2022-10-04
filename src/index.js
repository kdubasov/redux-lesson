import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./router";
import {BrowserRouter} from "react-router-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";

const defaultState = {
    cash:0,
}


const reducer = (state = defaultState,action) =>{
    switch (action.type) {
        case "ADD_CASH":
            return {...state,cash: state.cash + action.payload}
        case "GET_CASH":
            return {...state,cash: state.cash - action.payload}
        default:
            return state
    }
}

const reduxStore = createStore(reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={reduxStore}>
        <BrowserRouter>
          <React.StrictMode>
            <Router />
          </React.StrictMode>
        </BrowserRouter>
    </Provider>
);
