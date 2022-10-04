import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Badge, Button, ListGroup} from "react-bootstrap";

const Clients = () => {

    const dispatch = useDispatch()
    const clients = useSelector(state => state.client.clients);

    const addClient = name =>{
        const client = {
            name,
            id:Date.now()
        }
        dispatch({type:"ADD_CLIENT",payload:client})
    }

    const removeClient = client =>{
        dispatch({type:"REMOVE_CLIENT",payload:client.id})
    }

    return (
        <div className={`Clients w-50 border p-3 mt-1`}>
            <Button variant={'outline-success'} onClick={() => addClient(prompt())}>Добавить клиента</Button>
            {
                clients.length?
                    <ListGroup className={'mt-2'}>
                        {clients.map(cl => (
                            <ListGroup.Item className={'d-flex justify-content-between align-items-center'}>
                                {cl.name}
                                <Button size={"sm"} variant={"danger"} onClick={() => removeClient(cl)}>Удалить</Button>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>:
                    <h4 className={'mt-2 mb-0'}><Badge>Клиентов пока нет</Badge></h4>
            }
        </div>
    );
};

export default Clients;