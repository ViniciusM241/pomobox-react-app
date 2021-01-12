import React, { useEffect, useState } from 'react';

import Header from '../../Header';
import Input from '../../Input';
import Button from '../../Button';
import Modal from '../../Modal';

import buttonGo from '../../../assets/buttonGo.svg';

import { Title, Body } from './style.js';

export default function ToDoPage() {

    const [toDoList, setToDoList] = useState([]);
    const [idCount, setIdCount] = useState(0);

    useEffect(() => {
        if(localStorage.hasOwnProperty("toDoArray"))
             setToDoList(JSON.parse(localStorage.getItem("toDoArray")));
    }, [])

    const toDoObject = {
        Id: 0,
        Name: '',
        Description: ''
    };

    const [toDoItem, setToDoItem] = useState(toDoObject)
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setToDoItem({
            ...toDoItem,
            [name]: value
        })
    }

    useEffect(() => {
        localStorage.setItem('toDoArray', JSON.stringify(toDoList));
    }, [toDoList]);

    const setItems = () => {
        if(toDoItem.Name !== "" && toDoItem.Description !== ""){
            if(toDoItem.Id){
                let array = toDoList;
                array.forEach(x => {
                    if(x.Id === toDoItem.Id){
                        x.Name = toDoItem.Name;
                        x.Description = toDoItem.Description;
                    }
                });
                setToDoList(array);
                setToDoItem(toDoObject);
                localStorage.setItem('toDoArray', JSON.stringify(toDoList));
                alert('ToDo edited with success!');
            } else {
                setIdCount(idCount + 1);
                toDoItem.Id = idCount;
                setToDoList([...toDoList, toDoItem]);
                setToDoItem(toDoObject);
                alert('Added with success!');   
            }
        }else
            alert('You need to fill all the fields before add.');
    }

    const deleteItem = id => {
        const index = toDoList.filter(x => x.Id !== id);
        setToDoList(index);
    }

    return (
        <>
            <Header btnIco={buttonGo} icoAlt="ButtonIco" btnName="Start" btnTo="/MainPage" >
                <Input onChange={handleInputChange.bind(this)} type="text" name="Name" value={toDoItem.Name}>Name: </Input>
                <Input onChange={handleInputChange.bind(this)} textarea name="Description" value={toDoItem.Description}>Description: </Input>
                <Button onClick={() => setItems()} ico={buttonGo} alt="ButtonIco" secondary> Add </Button>
            </Header>
            <Body>
                <Title>TODO LIST:</Title>
                {toDoList && toDoList.map(elem => 
                    <Modal onClick={() => deleteItem(elem.Id)} key={elem.Id} toDoObject={elem} setInput={setToDoItem} />
                )}
            </Body>
        </>
    );
}