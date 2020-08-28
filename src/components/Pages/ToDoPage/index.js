import React, { useState } from 'react';

import Header from '../../Header';
import Input from '../../Input';
import Button from '../../Button';

import buttonGo from '../../../assets/buttonGo.svg';

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
                <Input onChange={handleInputChange.bind(this)} type="text" name="Name" value={toDoItem.Name} />
                <Input onChange={handleInputChange.bind(this)} textarea name="Description" value={toDoItem.Description} />
                <Button to="" ico={buttonGo} alt="ButtonIco" secondary> Add </Button>
            </Header>
        </>
    );
}