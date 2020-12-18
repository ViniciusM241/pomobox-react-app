import React, { useState } from 'react';

import Header from '../../Header';
import Input from '../../Input';
import Button from '../../Button';
import Modal from '../../Modal';

import buttonGo from '../../../assets/buttonGo.svg';

import { Title } from './style.js';

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
            [name]: value
        })
        console.log(toDoItem)
    };

    return (
        <>
            <Header btnIco={buttonGo} icoAlt="ButtonIco" btnName="Start">
                <Input onChange={handleInputChange.bind(this)} type="text" name="Name" value={toDoItem.Name}>Name: </Input>
                <Input onChange={handleInputChange.bind(this)} textarea name="Description" value={toDoItem.Description}>Description: </Input>
                <Button to="/ToDoPage" ico={buttonGo} alt="ButtonIco" secondary> Add </Button>
            </Header>
            <Title>TODO LIST:</Title>
            <Modal name={toDoObject.Name} />
        </>
    );
}