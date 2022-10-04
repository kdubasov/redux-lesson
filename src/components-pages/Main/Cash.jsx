import React from 'react';
import {Button, Container} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";

const Cash = () => {

    const dispatch = useDispatch();
    //в юз селектор необходимо обратиться именно к определенному редбюсеру для того чтобы взять из него (как к объекту)
    const cash = useSelector(state => state.cash.cash);
    console.log(cash,'CASH NOW');

    const addCash = (cashValue) => {
        dispatch({type:'ADD_CASH',payload:cashValue})
    }

    const getCash = (cashValue) =>{
        dispatch({type:'GET_CASH',payload:cashValue})
    }

    return (
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
    );
};

export default Cash;