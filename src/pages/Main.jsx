import React from 'react';
import {Badge} from "react-bootstrap";
import Cash from "../components-pages/Main/Cash";
import Clients from "../components-pages/Main/Clients";

const Main = () => {

    return (
        <div className={'Main container py-3'}>
            <h3><Badge>Главная страница</Badge></h3>

            <Cash />
            <Clients />
        </div>
    );
};

export default Main;