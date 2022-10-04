import React from 'react';
import {Badge, Button, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Main = () => {

    const dispatch = useDispatch();
    const cash = useSelector(state => state.cash);
    console.log(cash,'CASH NOW');

    const addCash = (cashValue) => {
        dispatch({type:'ADD_CASH',payload:cashValue})
    }

    const getCash = (cashValue) =>{
        dispatch({type:'GET_CASH',payload:cashValue})
    }

    return (
        <div className={'Main container py-3'}>
            <h3><Badge>Главная страница</Badge></h3>

            <div className="box border p-3 w-50 d-flex justify-content-center flex-wrap">
                <h4 className={'w-100 text-center'}>{cash}</h4>
                <Container className={`d-flex justify-content-center pt-3`}>
                    <Button
                        className={`mx-2`}
                        variant={'outline-success'}
                        onClick={() => addCash(Number(prompt()))}
                    >
                        Добавить
                    </Button>

                    <Button
                        className={`mx-2`}
                        variant={'outline-danger'}
                        onClick={() => getCash(Number(prompt()))}
                    >
                        Снять
                    </Button>
                </Container>
            </div>
        </div>
    );
};

export default Main;