import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from "./router";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {reduxStore} from "./store";

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
