import React, { useState } from 'react';

import Header from '../../Header';
import Input from '../../Input';
import Button from '../../Button';
import Modal from '../../Modal';

import buttonGo from '../../../assets/buttonGo.svg';

import { Title, Body } from './style.js';

export default function ToDoPage() {

    const lastId = () => {
        return 0;
    };

    const [idCount, setIdCount] = useState(lastId());

    const toDoObject = {
        Id: idCount,
        Name: '',
        Description: ''
    };

    const [toDoItem, setToDoItem] = useState(toDoObject);
    // const [toDoList, setToDoList] = useState([]);
    
    const handleInputChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setToDoItem({
            ...toDoItem,
            [name]: value
        })

        console.log(toDoItem);
    };

    const setItems = () => {
        alert('Hello')
        setIdCount({idCount: idCount + 1});
        const json = JSON.stringify(toDoItem);

        console.log(json);
    }

    return (
        <>
            <Header btnIco={buttonGo} icoAlt="ButtonIco" btnName="Start">
                <Input onChange={handleInputChange.bind(this)} type="text" name="Name" value={toDoItem.Name}>Name: </Input>
                <Input onChange={handleInputChange.bind(this)} textarea name="Description" value={toDoItem.Description}>Description: </Input>
                <Button as="button" onClick={() => setItems()} ico={buttonGo} alt="ButtonIco" secondary> Add </Button>
            </Header>
            <Body>
                <Title>TODO LIST:</Title>
                <Modal toDoName={toDoObject.Name} />
            </Body>
        </>
    );
}